FROM nginx

# RUN apt-get update
# RUN apt-get install -y nginx
RUN rm -v /etc/nginx/nginx.conf

ADD /nginx/nginx.conf /etc/nginx/
ADD /public /var/www/foundyourgift

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80

CMD service nginx start
