'use strict';

import Builder from '../util/Builder';
import * as slimPants from '../asins/pants/slim.json';
import * as skinnyPants from '../asins/pants/skinny.json';

export default {
	init() {
		// SLIM PANTS
		const SLIM_PANTS = slimPants.default;
		const SLIM_PANT_OPTIONS = {
			target: 'slimPants',
			title: `{{COLOR}} Slim Fit Performance Stretch Dress Pant`,
			caption:
				"Ready to wear. Arrives with a finished hemmed to avoid extra tailoring. Great for your 9-5 work week, a night out, or traveling. Wrink resistant engineered fabric.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'grey',
					hex: '#565150',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'medium grey',
					hex: '#5e5958',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#2a2f44',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'black',
					hex: '#000000',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `{{COLOR}} Slim Fit Performance Stretch Dress Pant`,
					id: 'slimPants',
					data: SLIM_PANTS,
				},
			],
		};

		const SLIM_PANT_BUILDER = new Builder({
			...SLIM_PANT_OPTIONS,
		});


		// SKINNY PANTS
		const SKINNY_PANTS = skinnyPants.default;
		const SKINNY_PANT_OPTIONS = {
			target: 'skinnyPants',
			title: `{{COLOR}} Skinny Fit Performance Stretch Dress Pant`,
			caption:
				"Calvin Klein's slimmest fit available with an ultra tapered leg and 4-way Infinite Stretch fabric for increased motion.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'black',
					hex: '#000000',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'light gray',
					hex: '#3d3d3b',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'medium gray',
					hex: '#5e5958',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#2a2f44',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `{{COLOR}} Skinny Fit Performance Stretch Dress Pant`,
					id: 'skinnyPants',
					data: SKINNY_PANTS,
				},
			],
		};

		const SKINNY_PANT_BUILDER = new Builder({
			...SKINNY_PANT_OPTIONS,
		});
	},

	finalize() {
		
	}
};
