let out = document.querySelector('#calc__screen');
// out.textContent = '0';

let buttons = document.querySelectorAll('.btn');
const clearAll = document.querySelector('.clear');
const clearLast = document.querySelector('.clear-last');
const pointBtn = document.querySelector('.point-btn');

let a = '';
let b = '';
let operator = '';
let end = false;

function clearDisplay() {
	a = '';
	b = '';
	operator = '';
	out.textContent = '0';
	end = false;
}

clearAll.addEventListener('click', clearDisplay);

function deleteLast() {
	if (a.length > 0) {
		a = a.slice(0, -1);
		out.textContent = a;
	}
	if (b.length > 0) {
		b = b.slice(0, -1);
		out.textContent = b;
	}
}

clearLast.addEventListener('click', deleteLast);

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		let key = e.target;
		let keyContent = e.target.textContent;

		if (key.classList.contains('number')) {
			if (b === '' && operator === '') {
				a += keyContent;
				out.textContent = a;
			} else {
				b += keyContent;
				out.textContent = b;
			}
		}
		if (key.classList.contains('operator')) {
			operator = keyContent;
			out.textContent = operator;
		}

		pointBtn.addEventListener('click', () => {
			let activeOperator = operator === '' ? a : b;

			if (!activeOperator.includes('.')) {
				activeOperator += '.';
				if (operator === '') {
					a = activeOperator;
					out.textContent = a;
				} else {
					b = activeOperator;
					out.textContent = b;
				}
			}
		});
        // console.log(a, b, operator);
        

        if (key.classList.contains('equal')) {
            switch (operator) {
				case '+':
					a = Number(a) + Number(b);
					break;
				case '-':
					a = Number(a) - Number(b);
					break;
				case 'X':
					a = Number(a) * Number(b);
					break;
				case '%':
                    a = ((Number(a) / 100) * Number(b)).toFixed(2);                    
					break;
				case '/':
					if (b === '0') {
						out.textContent = 'Error';
						a = '';
						b = '';
						operator = '';
						return;
					}
					a = Number(a) / Number(b);
					break;
            }
            end = true;
            out.textContent = a;
        }
    });
});


