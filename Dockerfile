# Użyj obrazu z Node.js jako bazowy
FROM node:18-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json, aby zainstalować zależności
COPY package*.json ./

# Instalacja zależności
RUN npm install

# Skopiuj wszystkie pliki projektu do kontenera
COPY . .

# Zbuduj aplikację Next.js
RUN npm install -g yarn --force

EXPOSE 3000

CMD yarn && yarn dev
