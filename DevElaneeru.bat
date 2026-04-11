@echo off
title Elaneeru Homestay - Vite
cd /d "%~dp0"
echo.
echo  Starting Elaneeru Homestay (this folder is the real app).
echo  Open the LOCAL URL Vite prints below (usually http://localhost:5173).
echo  If it fails, close other terminals running "npm run dev" first.
echo.
call npm run dev
pause
