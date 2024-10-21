# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files to the Nginx web directory
COPY index.html ./
COPY style.css ./
COPY script.js ./

# Expose port 80 to access the web server
EXPOSE 8080

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

