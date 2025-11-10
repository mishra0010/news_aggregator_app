# Stage 1: Development container for Vite
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# 🔑 Important: Let Vite bind to 0.0.0.0 so it’s accessible outside container
ENV HOST=0.0.0.0
ENV PORT=5173

EXPOSE 5173

# Start dev server
CMD ["npm", "run", "dev"]

