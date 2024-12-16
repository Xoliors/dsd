# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /practica7

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install i


# Copia el código fuente de la aplicación al contenedor
COPY . .

# Expone el puerto que utiliza la aplicación
EXPOSE 7501

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
