'use strict';

import Builder from '../util/Builder';
import * as slimOvercoat from '../asins/outerwear/slim.json';
import * as modenOvercoat from '../asins/outerwear/modern.json';

export default {
	init() {
		// SLIM OVERCOATS
		const SLIM_OVERCOATS = slimOvercoat.default;
		const SLIM_OVERCOAT_OPTIONS = {
			target: 'slimOvercoats',
			title: `{{COLOR}} Slim Fit Wool Blend Winter Coat`,
			caption:
				"Fleece lined slanted exterior pockets for easy access and extra warmth. The appropriate coat for any chilly occasion.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'grey',
					hex: '#616161',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91f5kSKHU5L._AC_UX679_.jpg',
					active: true,
				},
				{
					name: 'medium grey',
					hex: '#4a4a4a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81taEY24AeL._AC_UX679_.jpg',
					active: false,
				},
				{
					name: 'black solid',
					hex: '#000000',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'camel',
					hex: '#bd9a72',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81n1O139i-L._UX679_.jpg',
					active: false,
				},
				{
					name: 'burgundy',
					hex: '#482e31',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81v-5CxBZCL._UX679_.jpg',
					active: false,
				}
			],
			dropdowns: [
				{
					title: `{{COLOR}} Slim Fit Wool Blend Winter Coat`,
					id: 'slimOvercoats',
					data: SLIM_OVERCOATS,
				},
			],
		};

		const SLIM_OVERCOAT_BUILDER = new Builder({
			...SLIM_OVERCOAT_OPTIONS,
		});


		// SOFT JACKETS
		const MODERN_OVERCOATS = modenOvercoat.default;
		const MODERN_OVERCOAT_OPTIONS = {
			target: 'modernOvercoats',
			title: `{{COLOR}} Modern Fit Wool Blend Winter Coat with Cold Weather Features`,
			caption:
				"The coleman's interior zipper-bib and its stand collar design with tab closure will help repel and protect you from the cold and wind while the outer layer’s Front-button closure and side-entry front pockets enhance the modern design of this multifunctional overcoat.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'black solid',
					hex: '#000000',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'charcoal',
					hex: '#323232',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#101115',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `{{COLOR}} Modern Fit Wool Blend Winter Coat with Cold Weather Features`,
					id: 'modernOvercoats',
					data: MODERN_OVERCOATS,
				},
			],
		};

		const MODERN_OVERCOAT_BUILDER = new Builder({
			...MODERN_OVERCOAT_OPTIONS,
		});
	},

	finalize() {
		
	}
};
