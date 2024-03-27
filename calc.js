let out = document.querySelector('#calc__screen');
// let buttons = document.querySelectorAll('.btn');
let buttons = Array.of(...document.querySelectorAll('.btn'));
console.log(buttons);
const numbers = buttons.filter(
	(item) => !Number.isNaN(Number(item.textContent))
);
console.log(numbers);

const notNumbers = buttons.filter((item) => !numbers.includes(item));
console.log(notNumbers);

let firstNumber = 0;
let operator = '';



numbers.forEach((item) => {
	item.addEventListener('click', () => {
		out.textContent += item.textContent;
	});
});
// buttonValue = operatorValue
// inputValue = outValue
notNumbers.forEach((item) => {
	let operatorValue = item.textContent;
	item.addEventListener('click', () => {
		let outValue = Number(out.textContent);

		if (operatorValue === '.') {
			out.textContent += operatorValue;
		}

		if (operatorValue === 'AC') {
			out.textContent = '';
			firstNumber = 0;
			operator = '';
        }
        
        
         if (operatorValue === 'C') {
				firstNumber = outValue.toString();
				if (firstNumber.length > 0) {
					console.log(typeof firstNumber);
                    out.textContent = firstNumber.slice(0, -1);
                    console.log(out.textContent);
				}
				
			}



		if (operatorValue === '+') {
			firstNumber += outValue;
			out.textContent = '';
			operator = '+';
		}

		if (operatorValue === '-') {
			if (!firstNumber) {
				firstNumber = outValue;
				out.textContent = '';
				operator = '-';
				return;
			}
			firstNumber -= outValue;
			out.textContent = '';
			operator = '-';
		}

		if (operatorValue === '%') {
			firstNumber += outValue;
			out.textContent = '';
			operator = '%';
		}

		if (operatorValue === '÷') {
			if (!firstNumber) {
				firstNumber = outValue;
				out.textContent = '';
				operator = '/';
				return;
			}

			if (firstNumber && outValue === 0) {
				out.textContent = 'Error';
				operator = '';
				return;
			}

			firstNumber /= outValue;
			out.textContent = '';
			operator = '/';
		}

		if (operatorValue === 'x') {
			if (!firstNumber) {
				firstNumber = outValue;
				out.textContent = '';
				operator = 'x';
				return;
			}

			firstNumber *= outValue;
			out.textContent = '';
			operator = 'x';
		}

		if (operatorValue === '√') {
			firstNumber = outValue;
			out.textContent = Math.sqrt(firstNumber);
        }
        
        if (operatorValue === '+/-') {
            if (outValue < 0) {
                out.textContent += Math.abs(outValue);
            }
            if (outValue > 0) {
                out.textContent = `-${outValue}`;
            }
        }

		if (operatorValue === '=') {
			switch (operator) {
				case '+':
					out.textContent = outValue + firstNumber;
					break;
				case '-':
					out.textContent = firstNumber - outValue;
					break;
				case '%':
					out.textContent = (outValue / 100) * firstNumber;
					break;
				case '/':
					if (outValue === 0) {
						out.textContent = 'Error';
						break;
					}
					out.textContent = (firstNumber / outValue).toFixed(2);
					break;
				case 'x':
					out.textContent = firstNumber * outValue;
                    break;
                // case 'C':
                //     out.textContent = firstNumber.slice(0, -1);
                //     console.log(firstNumber);
                //     break;
                
			}
			operator = '';
			firstNumber = 0;
		}
	});
});

// switch (operatorValue) {
// 	case '+':
//         firstNumber += outValue;
//         outValue = '';
//         operator = '+';
// 		break;
// 	case '-':
//         if (!firstNumber) {
//             firstNumber = outValue;
//             outValue = '';
//             operator = '-';
//             return;
//         }
//         firstNumber -= outValue;
//         outValue = '';
// 		operator = '-';
// 		break;
// case 'X':
// 	a = Number(a) * Number(b);
// 	break;
// case '%':
// 	a = ((Number(a) / 100) * Number(b)).toFixed(2);
// 	break;
// case '/':
// 	if (b === '0') {
// 		out.textContent = 'Error';
// 		a = '';
// 		b = '';
// 		operator = '';
// 		return;
// 	}
// 	a = Number(a) / Number(b);
// 	break;
// 		}
//     })
// })
