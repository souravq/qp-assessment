# Use Node.js LTS version as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Install Prisma globally
RUN npm install -g prisma

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN prisma generate

# Expose the port on which our application runs
EXPOSE 4000

# Define the command to run our application
CMD ["npm", "start"]
