# FROM nginx:latest
FROM acr-on-enterprise-registry.cn-hangzhou.cr.aliyuncs.com/on-common/nginx:1.25.3

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8000