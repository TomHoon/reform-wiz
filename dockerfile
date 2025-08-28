# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the code
COPY . .

# Build Next.js
RUN npm run build

ENV PORT=33000

# Expose port
EXPOSE 33000

# Start app
CMD ["npm", "start"]
