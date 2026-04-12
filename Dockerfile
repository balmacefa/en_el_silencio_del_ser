FROM nginx:alpine

# Copiamos el contenido de la carpeta actual al directorio de nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
