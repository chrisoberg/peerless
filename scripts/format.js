'use strict';

const fs = require('fs');
const asinDir = './src/js/asins/';
const dirents = fs.readdirSync(asinDir, {withFileTypes: true});
const files = dirents
	.filter((file) => !file.isDirectory())
	.map((file) => file.name);

files.forEach((file) => {
	// Uncomment for testing
	if (file !== 'suits.json') return;

	const outputDir = file.split('.')[0];

	let fileData = fs.readFileSync(asinDir + file, 'utf8');
	fileData = JSON.parse(fileData);

	const items = Object.entries(fileData);

	// This will be the new file in the outputDir folder
	items.forEach(([key, value]) => {
		const newData = {};
		const parent = key;
		const asins = value;
		const colors = new Set();
		const outputPath = `${asinDir + outputDir}/${parent}.json`;

		// Group asins by color
		asins.forEach((asin) => {
			if (!colors.has(asin.color)) colors.add(asin.color);
		});

		colors.forEach((key, value, set) => {
			const colorGroup = [];
			const color = key.toLowerCase()

			asins.forEach((asin) => {
				if (asin.color === key) colorGroup.push(asin);
			});

			newData[color] = colorGroup;
		});

		// Write file to outputPath
		fs.writeFileSync(outputPath, JSON.stringify(newData));
	});
});
