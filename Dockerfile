FROM ubuntu:20.04

RUN apt-get update

RUN apt-get install -y curl \
  git \
  nano \
  htop \
  gnupg

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - 
RUN apt-get install -y nodejs
RUN npm install -g serverless

EXPOSE 3000
