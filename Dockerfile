#Stage 1
FROM node:18-alpine AS build
WORKDIR /usr/src
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


#Stage 2
FROM nginx:alpine
COPY --from=build usr/src/dist/dev-ops-frontend/* /usr/share/nginx/html