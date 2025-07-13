from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Request
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

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.get("/ping")
def ping():
    return {
        "pong": 0
    }

@app.get("/get-views")
def get_data():
    total = supabase.table("Engagement").select("*").execute()
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
