FROM node:14.16.0-buster-slim

WORKDIR /src

ADD package.json /src

RUN yarn --silent

ADD . /src

EXPOSE 3000

# ENTRYPOINT []

CMD ["yarn", "production"]
