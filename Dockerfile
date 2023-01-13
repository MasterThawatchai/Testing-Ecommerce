# ----------------- html -------------------
# # ! nginx คือ service ที่ใช้เก็บไฟล์ website 
# FROM nginx:latest

# COPY . ./profile /usr/share/nginx/html

# ----------------- react -------------------
# FROM nginx:latest

# COPY ./build /usr/share/nginx/html

# ------------------------------------------------

# pull official base image
FROM node:16.15.0 AS builder

# set working directory
WORKDIR /app

COPY package.json ./

RUN npm install


COPY . ./
RUN npm run build


FROM nginx:latest

# COPY . /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]