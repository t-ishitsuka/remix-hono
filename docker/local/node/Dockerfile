FROM node:22.14-slim

# Maintainer
LABEL maintainer Aprire

# Environments
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

# Update & install system packages
RUN apt-get update
RUN apt-get install -y \
    curl \
    less \
    lsof \
    procps \
    sudo \
    unzip \
    vim

RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Install global node packages
RUN npm install -g pnpm@10.4.1
RUN npm install -g turbo@2.4.2

# User
USER node

# Workdir
WORKDIR /app

