FROM ubuntu:12.04

RUN apt-get update
RUN apt-get install -y nginx zip curl

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

ADD /usr/share/nginx/www MyApp.zip
RUN cd /usr/share/nginx/www/ && unzip MyApp.zip && rm -rf MyApp.zip

RUN rm -v /etc/nginx/nginx.conf
ADD /nginx/nginx.conf /etc/nginx/
ADD public /var/www/foundyourgift


EXPOSE 80

CMD ["/usr/sbin/nginx", "-c", "/etc/nginx/nginx.conf"]
