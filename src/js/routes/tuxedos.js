'use strict';

import Builder from '../util/Builder';
import * as tuxedoJackets from '../asins/tuxedos/jackets.json';
import * as tuxedoPants from '../asins/tuxedos/pants.json';

export default {
	init() {
		const tuxedoJacketData = tuxedoJackets.default;
		const tuxedoPantData = tuxedoPants.default;
		const tuxedoOptions = {
			target: 'tuxedo',
			title: `Modern Fit Tuxedo`,
			caption:
				"100% Wool, imported, bottom hemmed plain front pocket pant side seam.",
			image: {
				position: 'right',
				src:
					'https://cdn.jsdelivr.net/gh/rdimascio/ck@1.5/assets/ck/tuxedos/tuxedo.jpg',
			},
			dropdowns: [
				{
					title: `Modern Fit Tuxedo Jacket`,
					image: 'https://cdn.jsdelivr.net/gh/rdimascio/ck@1.5/assets/ck/tuxedos/jacket.jpg',
					id: 'tuxedoJackets',
					data: tuxedoJacketData,
				},
				{
					title: `Modern Fit Tuxedo Pant`,
					image: 'https://cdn.jsdelivr.net/gh/rdimascio/ck@1.5/assets/ck/tuxedos/pants.jpg',
					id: 'tuxedoPants',
					data: tuxedoPantData,
				},
			],
		};

		const tuxedoBuilder = new Builder({
			...tuxedoOptions,
		});
	},

	finalize() {
		
	}
};
