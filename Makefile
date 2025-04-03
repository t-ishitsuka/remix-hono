.DEFAULT_GOAL := help

.PHONY: help
help:		## Make コマンド一覧の表示
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	@echo ""

############################################################
#
# Docker コンテナ操作
#
############################################################

.PHONY: network
network:	## Docker ネットワークの作成
	docker network create remix-hono-network

.PHONY: build
build:		## Docker コンテナのビルド
	docker compose build --no-cache

.PHONY: up
up:			## Docker コンテナの開始
	docker compose up -d

.PHONY: init
init:		## Docker コンテナ初期化
	@make network
	@make build
	@make up

.PHONY: rebuild
rebuild:	## Docker コンテナ再初期化
	@make down
	@make build
	@make up

.PHONY: stop
stop:		## Docker コンテナの停止
	docker compose stop

.PHONY: down
down:		## Docker コンテナの削除
	docker compose down

############################################################
#
# Docker コンテナ接続
#
############################################################

.PHONY: node
node: 		## Node コンテナに接続
	docker compose exec node bash

.PHONY: pg
pg: 		## PostgreSQL Server に接続
	docker compose exec pgsql bash -c 'psql -U user local'
