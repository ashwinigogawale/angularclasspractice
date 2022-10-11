/*1614766352000*/












AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['en_US'] = 'English (United States)';
			direction['en_US'] = 'ltr';

		

			available['mr_IN'] = 'Marathi (India)';
			direction['mr_IN'] = 'ltr';

		

			available['hi_IN'] = 'Hindi (India)';
			direction['hi_IN'] = 'ltr';

		

			available['bn_IN'] = 'Bengali (India)';
			direction['bn_IN'] = 'ltr';

		

			available['fr_FR'] = 'French (France)';
			direction['fr_FR'] = 'ltr';

		

			available['de_DE'] = 'German (Germany)';
			direction['de_DE'] = 'ltr';

		

			available['gu_IN'] = 'Gujarati (India)';
			direction['gu_IN'] = 'ltr';

		

			available['ja_JP'] = 'Japanese (Japan)';
			direction['ja_JP'] = 'ltr';

		

			available['kn_IN'] = 'Kannada (India)';
			direction['kn_IN'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: []
	}
);