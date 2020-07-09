FROM node:alpine

# set the application name
ENV APP_NAME react_hooks_app

# create app directory
RUN mkdir -p /opt/$APP_NAME
WORKDIR /opt/$APP_NAME

# install app dependencies 
COPY package.json ./

RUN npm install

# copy everything from this directory to the Docker container (except things in the .dockerignore)
COPY . .

# bundle app source
# COPY . /usr/src

# RUN npm run build 
# EXPOSE 3000

CMD ["npm", "run","dev"]