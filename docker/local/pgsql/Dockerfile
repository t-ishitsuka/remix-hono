FROM postgres:16.8

# Maintainer
LABEL maintainer Aprire

# Environments
ENV TZ Asia/Tokyo
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

RUN apt-get update && \
    apt-get clean language-pack-ja  && \
    rm -fr /var/lib/apt/lists/*

RUN localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

COPY ./docker/local/pgsql/create-testing-database.sql /docker-entrypoint-initdb.d/10-create-testing-database.sql
