# Use an official Nginx image to serve the content
FROM nginx:alpine

# Copy the static files to the Nginx container
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY pro.jpg /usr/share/nginx/html/pro.jpg

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]

