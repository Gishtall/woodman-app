# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/app
WORKDIR /usr/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/app/package.json
COPY public/* /usr/app/public/
COPY src/* /usr/app/src/
COPY components/* /user/app/src/components/
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
EXPOSE 4000
# start app
CMD ["npm", "start"]
