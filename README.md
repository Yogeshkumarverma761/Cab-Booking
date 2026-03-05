# QuickCab - Cab Booking Application

A full-stack Cab Booking application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io for real-time tracking.

## Project Structure

- `Backend/`: Express server, MongoDB models, and API routes.
- `frontend/`: React application (Vite).
- `package.json`: Root package file for managing both frontend and backend.
- `Dockerfile`: Multi-stage Docker build for production.

## Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas)
- Google Maps API Key

## Setup & Local Development

1. **Install Dependencies:**
   ```bash
   npm run install:all
   ```

2. **Environment Variables:**
   - Copy `Backend/.env.example` to `Backend/.env` and fill in your MongoDB URI, JWT Secret, and Google Maps API Key.
   - Copy `frontend/.env.example` to `frontend/.env` and set `VITE_BASE_URL` to your backend URL (e.g., `http://localhost:3000`).

3. **Run Backend:**
   ```bash
   npm run start:backend
   ```

4. **Run Frontend:**
   ```bash
   npm run start:frontend
   ```

## Deployment to Render (Backend)

1.  **Create a New Web Service** on Render.
2.  **Connect your GitHub Repository**.
3.  **Root Directory**: `Backend`
4.  **Build Command**: `npm install`
5.  **Start Command**: `node server.js`
6.  **Add Environment Variables**:
    *   `DB_CONNECT`: your MongoDB URI
    *   `JWT_SECRET`: your secret key
    *   `GOOGLE_MAPS_API`: your API key
    *   `PORT`: `3000` (or leave as default)

## Deployment to Vercel (Frontend)

1.  **Create a New Project** on Vercel.
2.  **Connect your GitHub Repository**.
3.  **Root Directory**: `frontend`
4.  **Framework Preset**: `Vite` (automatically detected)
5.  **Add Environment Variables**:
    *   `VITE_BASE_URL`: The URL of your Render backend (e.g., `https://your-app.onrender.com`)
    *   `VITE_GOOGLE_MAPS_API_KEY`: your Google Maps API key

## Deployment with Docker (All-in-One)

The project is also deployment-ready with a single Dockerfile that builds the frontend and serves it via the backend. Useful for platforms like DigitalOcean App Platform or AWS ECS.

1. **Build Docker Image:**
   ```bash
   docker build -t cab-booking-app .
   ```

2. **Run Docker Container:**
   ```bash
   docker run -p 3000:3000 --env-file ./Backend/.env cab-booking-app
   ```

## Features

- User & Captain Authentication
- Real-time Location Tracking (Socket.io)
- Map Integration (Google Maps API)
- Fare Calculation
- Ride Management
