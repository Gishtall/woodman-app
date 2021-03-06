# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /usr/app/
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
EXPOSE 3000-3001 
# start app
CMD ["npm", "start"]
