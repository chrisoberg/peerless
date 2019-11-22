'use strict';

const fs = require('fs');

(async () => {
	const failedAsinData = fs.existsSync(`./src/js/asins/failed/failed.json`)
		? fs.readFileSync(`./src/js/asins/failed/failed.json`, 'utf8')
		: [];

	let failedAsins = failedAsinData.length ? JSON.parse(failedAsinData) : [];

	if (failedAsins.length) {
		failedAsins.forEach((asin) => {
			console.log(asin.asin);
		});
	}
})();
