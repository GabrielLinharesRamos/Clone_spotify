# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application directory to the working directory
COPY . .

# Expose the port on which your application will run
EXPOSE 3333

# Command to run your application
CMD ["node", "src/server.js"]