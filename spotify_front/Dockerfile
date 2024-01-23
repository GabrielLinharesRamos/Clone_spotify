# Use an official Node.js runtime as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install
RUN npm install @babel/plugin-proposal-private-property-in-object --save-dev

# Copy the entire application directory to the working directory
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]