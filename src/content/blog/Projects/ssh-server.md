---
title: "OpenSSH Server on Windows 11"
description: "I recently bought a new PC running Windows 11. While trying to set it up as an SSH server, I quickly found out there isn't a centralized place for OpenSSH tutorials. This blog will serve as a step-by-step guide to setting up a OpenSSH server on Windows 11."
pubDate: "Jan 13, 2025"
image: "/images/previews/sshServer.png"
skills: ["Networking"]
---
# Setting up an OpenSSH Server on Windows 11

**Motivation:** I recently bought a new PC and wanted to set it up as a SSH server, so I could ssh into it from my laptop. However, I found it difficult to find the resources to setup/debug the server. I am writing this blog as a one-stop tutorial to help people set up their OpenSSH servers on Windows 11.

## Step 1: Installation

Install the OpenSSH server using PowerShell by running PowerShell as an administrator and running the following command.
```bash
Add-WindowsCapability -Online -Name OpenSSH.Server*
```

Confirm the installation by running the following command.
```bash
Get-WindowsCapability -Online | ? Name -like 'OpenSSH.Server*'
```

If the output looks like this, the OpenSSH server is installed.
```bash
PS C:\WINDOWS\system32> Get-WindowsCapability -Online | ? Name -like 'OpenSSH.Server*'


Name  : OpenSSH.Server~~~~0.0.1.0
State : Installed
```

## Step 2: Configuration
First, check the status of the SSH server service by running the following command.
```bash
Get-Service -Name *ssh*
```

The output should look like this. If the SSH agent is also installed, it will also appear here.
```bash
PS C:\WINDOWS\system32> Get-Service -Name *ssh*

Status   Name               DisplayName
------   ----               -----------
Stopped  ssh-agent          OpenSSH Authentication Agent
Stopped  sshd               OpenSSH SSH Server
```

For convenience, set the sshd service to the automatically start. Then, start the service. Do this by running these commands.
```bash
Set-Service -Name sshd -StartupType 'Automatic'
Start-Service sshd
```

Finally, add a firewall rule to allow SSH traffic through port 22.
```bash
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
```

## (Optional, but Recommended) Step 3: Switch from CMD to PowerShell
The default terminal for a SSH server is the CMD. To switch it to PowerShell, run the following command.
```bash
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -PropertyType String -Force
```

## (Optional, but Recommended) Step 4: Configure Key Based Authorization

Personally, I use my Yubikey 5 to authenitcate into my SSH server. To make this possible we need to do a few things. Start by opening the server configuration file by running the following command.
```bash
notepad.exe $env:PROGRAMDATA\ssh\sshd_config
```

To disable password authenication and enable key-based authenication, uncomment the following settings and set them as follows.
```
PubkeyAuthentication yes
PasswordAuthentication no
PermitEmptyPasswords no
```

### If the user is NOT in the 'Administrator' group:
Uncomment the following line in the sshd_config file.
```bash
AuthorizedKeysFile	.ssh/authorized_keys
```

The ```.ssh``` folder and ```authorized_keys``` file must be created, as they don't exist by default. Run these commands back in the PowerShell terminal to create these and open the file.
```bash
mkdir "$HOME\.ssh"
$authorizedKeyFilePath = “$HOME\.ssh\authorized_keys”
New-Item $authorizedKeyFilePath
notepad.exe $authorizedKeyFilePath
```

Paste the public key you want to use into this file. Save and close this file. Next, make sure the file has the correct permissions. Only the system account should be able to access it. Do this by running these commands.

```bash
icacls.exe $authorizedKeyFilePath /remove “NT AUTHORITY\Authenticated Users”
icacls.exe $authorizedKeyFilePath /inheritance:r
Get-Acl “$env:ProgramData\ssh\ssh_host_rsa_key” | Set-Acl $authorizedKeyFilePath
```

Finally, restart the SSH server using this command.
```bash
Restart-Service -Name sshd
```
Congrats! Your SSH server is now set up and ready to be accessed!

### If the user is in the 'Administrator' group:
Uncomment the following line in the sshd_config file.
```bash
Match Group administrators
	AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys
```

The ```administrators_authorized_keys``` file must be created, as it doesn't exist by default. Run these commands back in the PowerShell terminal to create and open this file.
```bash
$authorizedKeyFilePath = “$env:ProgramData\ssh\administrators_authorized_keys”
New-Item $authorizedKeyFilePath
notepad.exe $authorizedKeyFilePath
```

Paste the public key you want to use into this file. Save and close this file. Next, make sure the file has the correct permissions. Only the system account should be able to access it. Do this by running these commands.
```bash
icacls.exe $authorizedKeyFilePath /remove “NT AUTHORITY\Authenticated Users”
icacls.exe $authorizedKeyFilePath /inheritance:r
Get-Acl “$env:ProgramData\ssh\ssh_host_rsa_key” | Set-Acl $authorizedKeyFilePath
```

Finally, restart the SSH server using this command.
```bash
Restart-Service -Name sshd
```

Congrats! Your SSH server is now set up and ready to be accessed!

---
Sources Used:

<a href="https://gist.github.com/teocci/5a96568ab9bf93a592d7a1a237ebb6ea" target="_blank" rel="noopener noreferrer">teocci's GitHub Gist</a> | <a href="https://dev.to/rkttu/set-up-an-ssh-server-in-windows-10-native-way-22d9" target="_blank" rel="noopener noreferrer">Jeong Hyun Nam's DEV Blog Post</a> | <a href="https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell&pivots=windows-server-2022" target="_blank" rel="noopener noreferrer">Official Microsoft OpenSSH "Getting Started" Page</a>
