# 1. Imagen base oficial de Node.js (versión ligera Alpine)
FROM node:20-alpine

# 2. Directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos las dependencias y las instalamos
COPY package.json ./
RUN npm install --only=production

# 4. Copiamos el código fuente
COPY index.js ./

# 5. Puerto en el que escucha la API dentro del contenedor
EXPOSE 3000

# 6. Comando para arrancar la aplicación
CMD ["npm", "start"]