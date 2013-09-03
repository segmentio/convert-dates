
install: component.json
	@component install --dev

build: components index.js
	@component build --dev

clean:
	rm -fr build components

test: build
	@open test/index.html

.PHONY: clean test
