# Build
FROM node:alpine AS build

ARG VITE_API_KEY="$VITE_API_KEY"

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Serve
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]