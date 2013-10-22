
build: node_modules components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	@rm -fr build components node_modules

node_modules:
	@npm install
	@touch node_modules

test: build
	@open test/index.html

.PHONY: clean test
