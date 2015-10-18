
host-dist:
	grunt build
	@echo "About to host on port 80 - sudo required"
	(cd dist && sudo python -m SimpleHTTPServer  80)
