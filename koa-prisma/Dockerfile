# Base on offical Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/server

# Copy all files
COPY ./ ./

# Install dependencies
RUN yarn --prod

# production environment
ENV NODE_ENV=production
ENV PORT=5500

# Expose the listening port
EXPOSE 5500

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script when container starts
CMD [ "yarn", "start" ]
