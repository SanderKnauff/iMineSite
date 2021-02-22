FROM node:14.15.5-alpine3.13

RUN apk add --no-cache chromium

RUN mkdir /build
WORKDIR /build
COPY . .

RUN npm install
RUN node ./node_modules/ember-cli/bin/ember test
RUN node ./node_modules/ember-cli/bin/ember build --prod

FROM nginx
COPY --from=0 /build/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
