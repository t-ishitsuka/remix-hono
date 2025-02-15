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

# Install global npm packages
RUN npm install -g pnpm

# User
USER node

# Workdir
WORKDIR /app

