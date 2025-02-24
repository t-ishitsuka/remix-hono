FROM node:22.14-slim

# Maintainer
LABEL maintainer Aprire

# Environments
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# Update & install system packages
RUN apt-get update
RUN apt-get install -y \
    procps \
    less \
    vim \
    curl \
    unzip \
    sudo

# Install global node packages
RUN npm install -g pnpm@10.4.1
RUN npm install turbo@2.4.2 --global

# User
USER node

# Workdir
WORKDIR /app

