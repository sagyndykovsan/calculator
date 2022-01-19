let calcMap = ['7', '8', '9', '+',
			   '4', '5', '6', '-',
			   '1', '2', '3', '*',
			   '0', '.', '=', 'c'];

let inp = document.getElementById('inp');

calcMap.forEach(function(sign) {
	let div = document.createElement('div');
	div.setAttribute('onclick', `printsign('${sign}')`);
	div.innerHTML = sign;
	div.className = 'btn';
	document.querySelector('#calculator').appendChild(div);
});

function printsign(sign) {
	if (sign == 'c') {
		inp.value = '';
		return;
	}

	if (sign == '=') {
		inp.value = eval(inp.value);
		return;
	}

	if (isFinite(sign)) {
		inp.value += sign;
	} else {
		if (sign == '.' && inp.value == '') {
			inp.value = '0.';
			return;
		}
		if (!isFinite(inp.value[inp.value.length - 1])) return;
		inp.value += sign;
	}
}