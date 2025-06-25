# Step 1: Use the official Node.js image as the base image
FROM node:22-alpine AS build

# Step 2: Install OpenSSL and other required dependencies
RUN apk add --no-cache openssl

# Optional: Lock npm version to avoid future incompatibility
RUN npm install -g npm@10.9.2

# Step 3: Set the working directory in the container
WORKDIR /app

# Step 4: Install dependencies
# Copy package.json and package-lock.json to avoid reinstalling dependencies on every build
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Step 5: Copy the Next.js app code to the container
COPY . .

# Step 7: Build the Next.js app
RUN npm run build

# Step 8: Create a new stage for the final image
FROM node:22-alpine AS production

# Step 9: Install OpenSSL and PM2 globally
RUN apk add --no-cache openssl && npm install -g pm2

# Step 10: Set the working directory for the production container
WORKDIR /app

# Step 11: Copy only the necessary files from the build stage
COPY --from=build /app /app

# Step 12: Install only production dependencies
RUN npm ci --only=production --legacy-peer-deps

# Step 13: Expose the port your app will run on
EXPOSE 3000

# Step 14: Use PM2 to run the application in production mode
CMD ["pm2-runtime", "start", "node_modules/.bin/next", "--", "start"]