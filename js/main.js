//Event handler
document.getElementById('weightValue').addEventListener('input', convertWeight);

function convertWeight() {
	// Inputs
	const amnt = document.getElementById('weightValue');
	const slctr1 = document.getElementById('weightSelector').value;
	const slctr2 = document.getElementById('weightSelector2').value;
	// Output
	let output = document.getElementById('output');
	let result;

	if (slctr1 === slctr2) {
		output.innerHTML = `<div class="card text-dark">
			<div class="bg-default card-body">
				<h5 class="card-title">${slctr1}</h5>
				<p class="card-text">${amnt.value}</p>
			</div>
		</div>`;
	}
	if (slctr1 === 'Pounds') {
		//If select 1 is lbs
		switch (slctr2) {
			case 'Grams':
				result = Math.round(divide(amnt.value, 0.00220462));

				output.innerHTML = `<div class="card text-dark">
					<div class="bg-warning card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;

			case 'Ounce':
				result = Math.round(multiply(amnt.value, 16));

				output.innerHTML = `<div class="card text-light">
					<div class="bg-success card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Kilograms':
				result = divide(amnt.value, 2.20462);

				output.innerHTML = `<div class="card text-light">
				<div class="bg-danger card-body">
					<h5 class="card-title">${slctr2}</h5>
					<p class="card-text">${result}</p>
				</div>
			</div>`;
				break;
			default:
				output.innerHTML = `<div class="card text-dark">
				<div class="bg-default card-body">
					<h5 class="card-title">Sorry, can't convert this.</h5>
				</div>
			</div>`;
				break;
		}
	} else if (slctr1 === 'Grams') {
		//If select 1 is g
		switch (slctr2) {
			case 'Pounds':
				result = multiply(amnt.value, 0.00220462262);
				output.innerHTML = `<div class="card text-light">
					<div class="bg-primary card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Ounce':
				result = multiply(amnt.value, 0.035274);
				output.innerHTML = `<div class="card text-light">
					<div class="bg-success card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;

			case 'Kilograms':
				result = multiply(amnt.value, 0.001);

				output.innerHTML = `<div class="card text-light">
					<div class="bg-danger card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			default:
				output.innerHTML = `<div class="card text-dark">
				<div class="bg-default card-body">
					<h5 class="card-title">Sorry, can't convert this.</h5>
				</div>
			</div>`;
				break;
		}
	} else if (slctr1 === 'Ounce') {
		//If select 1 is oz
		switch (slctr2) {
			case 'Pounds':
				result = multiply(amnt.value, 0.0625);

				output.innerHTML = `<div class="card text-light">
					<div class="bg-primary card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Grams':
				result = Math.round(multiply(amnt.value, 28.3495));
				output.innerHTML = `<div class="card text-dark">
					<div class="bg-warning card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Kilograms':
				result = multiply(amnt.value, 0.0283495);
				output.innerHTML = `<div class="card text-light">
					<div class="bg-danger card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			default:
				output.innerHTML = `<div class="card text-dark">
				<div class="bg-default card-body">
					<h5 class="card-title">Sorry, can't convert this.</h5>
				</div>
			</div>`;
				break;
		}
	} else if (slctr1 === 'Kilograms') {
		//If select 1 is kg
		switch (slctr2) {
			case 'Pounds':
				result = Math.round(multiply(amnt.value, 2.20462));
				output.innerHTML = `<div class="card text-light">
					<div class="bg-pramary card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Grams':
				result = Math.round(multiply(amnt.value, 1000));
				output.innerHTML = `<div class="card text-dark">
					<div class="bg-warning card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			case 'Ounce':
				result = Math.round(multiply(amnt.value, 35.274));
				output.innerHTML = `<div class="card text-dark">
					<div class="bg-sucess card-body">
						<h5 class="card-title">${slctr2}</h5>
						<p class="card-text">${result}</p>
					</div>
				</div>`;
				break;
			default:
				output.innerHTML = `<div class="card text-dark">
				<div class="bg-default card-body">
					<h5 class="card-title">Sorry, can't convert this.</h5>
				</div>
			</div>`;
				break;
		}
	}
}

//Computing functions.

const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
