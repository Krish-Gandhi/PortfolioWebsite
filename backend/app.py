from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request, Body
from pydantic import BaseModel
import requests
import os
from supabase import create_client

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")
SUGGESTION_WEBHOOK_URL = os.environ.get("SUGGESTION_WEBHOOK_URL");

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.get("/ping")
def ping():
    return {
        "pong": 0
    }

@app.get("/get-views")
def get_data():
    total = supabase.table("Engagement").select("*").order("views", desc=True).execute()
    prevWeek = supabase.rpc("get_prev_week_views").execute()
    return {
        "views": total.data,
        "hot": prevWeek.data
    }

@app.get("/increment/{slug}")
def increment_views(slug, request: Request):
    response = supabase.rpc("increment_views", {
    "slug_input": slug,
    "ip_input": request.client.host
    }).execute()
    
    return response.data

@app.get("/user-count")
def increment_views():
    response = supabase.rpc("get_user_count").execute()
    return response.data[0]


class Suggestion(BaseModel):
    name: str
    email: str
    company: str
    title: str
    request: str

@app.post("/send-suggestion")
def send_suggestion(payload: Suggestion):
    content = (
        f"## Suggestion Received\n"
        f"**Name:** {payload.name}\n"
        f"**Email:** {payload.email}\n"
        f"**Company:** {payload.company}\n"
        f"**Title:** {payload.title}\n"
        f"**Request:** {payload.request}"
    )
    response = requests.post(SUGGESTION_WEBHOOK_URL, json={"content": content})
    return {"status": response.status_code, "detail": "Sent"}
