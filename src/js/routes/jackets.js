'use strict';

import Builder from '../util/Builder';
import * as slimJackets from '../asins/jackets/slim.json';
import * as softJackets from '../asins/jackets/soft.json';

export default {
	init() {
		// SLIM JACKETS
		const SLIM_JACKETS = slimJackets.default;
		const SLIM_JACKET_OPTIONS = {
			target: 'slimJackets',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'gray',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'charcoal',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
					id: 'slimJackets',
					data: SLIM_JACKETS,
				},
			],
		};

		const SLIM_JACKET_BUILDER = new Builder({
			...SLIM_JACKET_OPTIONS,
		});


		// SOFT JACKETS
		const SOFT_JACKETS = softJackets.default;
		const SOFT_JACKET_OPTIONS = {
			target: 'softJackets',
			title: `Slim Fit {{COLOR}} Soft Jacket`,
			caption:
				"This modern jacket fabric has a more relaxed appearance, it pairs perfectly with casual bottoms, it has natural stretch for added comfort and is easy to care for and maintain.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'denim',
					hex: '#262637',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'charcoal',
					hex: '#2c2b30',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Soft Jacket`,
					id: 'softJackets',
					data: SOFT_JACKETS,
				},
			],
		};

		const SOFT_JACKET_BUILDER = new Builder({
			...SOFT_JACKET_OPTIONS,
		});
	},

	finalize() {
		
	}
};
