.PHONY: do
do: format lint check build

.PHONY: build
build: check
	npx svelte-kit build

.PHONY: format
format:
	npx prettier --write --plugin-search-dir=. src tests *.js *.ts

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

.PHONY: ocr
ocr:
	ocrmypdf -l eng --rotate-pages --deskew --clean --oversample 300 --force-ocr test.pdf
