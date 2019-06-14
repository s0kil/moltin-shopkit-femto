default: dev

dev:
	clear;
	npm run dev;

prod:
	npm run build;
	npm run compress;
	rm -f dist/app.js.map;

start:
	npm run start;