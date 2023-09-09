FROM mhart/alpine-node
RUN npm install -g http-server
WORKDIR /site
ADD ./ /site
EXPOSE 8080
CMD ["http-server", "--cors", "-p", "8080", "/site"]
