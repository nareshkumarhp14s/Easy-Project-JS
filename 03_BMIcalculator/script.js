let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const resultElement = document.querySelector("#results");
    const under = document.querySelector("#under");
    const normal = document.querySelector("#normal");
    const over = document.querySelector("#over");

    if (height === '' || height < 0 || isNaN(height)) {
        resultElement.innerHTML = `Please enter a valid height: ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        resultElement.innerHTML = `Please enter a valid weight: ${weight}`;
    }
    else {
        const Bmi = (weight / ((height * height) / 10000)).toFixed(2);
        resultElement.innerHTML = `<span>${Bmi}</span>`;
        resultElement.style.display= 'block';
        setColor(Bmi);
    }

    function setColor(Bmi) {
        if (Bmi <= 18.6) {
            under.style.color = 'blue';
            normal.style.color = ''; // Reset other styles
            over.style.color = ''; // Reset other styles
        } else if (Bmi >= 24.9) {
            over.style.color = 'red';
            normal.style.color = ''; // Reset other styles
            under.style.color = ''; // Reset other styles
        } else {
            normal.style.color = 'green';
            under.style.color = ''; // Reset other styles
            over.style.color = ''; // Reset other styles
        }
    }
});
