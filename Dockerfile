# Stage 1: Build the application
FROM node:22.16.0-alpine AS builder
RUN corepack enable && corepack prepare pnpm@10.25.0 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:1.28.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
