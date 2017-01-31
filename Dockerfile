# Set the base image to Ubuntu
FROM ubuntu

# Update the repository
RUN apt-get update
RUN apt-get install -y nginx
RUN rm -v /etc/nginx/nginx.conf

ADD /nginx/nginx.conf /etc/nginx/
ADD /public /var/www/foundyourgift

# Append "daemon off;" to the configuration file
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 80

# Set the default command to execute when creating a new container
CMD service nginx start
