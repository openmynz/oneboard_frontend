FROM node:18.17.1-alpine AS build


WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json .

# Install dependenciesFROM node:lts-alpline

RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build --no-cache

# Use NGINX as the production web server
FROM nginx:alpine

# Copy the built React app from the previous stage to the NGINX web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
