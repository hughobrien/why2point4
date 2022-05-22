.PHONY: do
do: format lint check build

.PHONY: build
build: check
	npx svelte-kit build

.PHONY: format
format:
	npx prettier --write --plugin-search-dir=. .

.PHONY: lint
lint:
	npx prettier --check --plugin-search-dir=. .
	npx eslint .

.PHONY: check
check:
	npx svelte-check --tsconfig ./tsconfig.json

.PHONY: dev
dev: format
	npx svelte-kit dev --host 0.0.0.0
