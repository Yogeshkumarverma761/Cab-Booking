# Build Stage for Frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Final Stage for Backend
FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++
COPY Backend/package*.json ./Backend/
RUN cd Backend && npm install
COPY Backend/ ./Backend/
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

EXPOSE 3000
WORKDIR /app/Backend
CMD ["npm", "start"]
