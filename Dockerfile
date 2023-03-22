FROM nginx:stable-alpine

COPY build /usr/share/nginx/html
COPY infrastructure/nginx/docker.nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
