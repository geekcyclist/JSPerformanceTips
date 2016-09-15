function formatWithCommas(input)
{
	input += '';
	x = input.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var regEx = /(\d+)(\d{3})/;
	while (regEx.test(x1)) {
		x1 = x1.replace(regEx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}