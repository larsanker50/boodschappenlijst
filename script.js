const inputBrood = document.getElementById('inputBrood');
const inputBrocolli = document.getElementById('inputBrocolli');
const inputKrentenbollen = document.getElementById('inputKrentenbollen');
const inputNoten = document.getElementById('inputNoten');

const subTotaalBrood = document.getElementById('productTotalCostA');
const subTotaalBrocolli = document.getElementById('productTotalCostB');
const subTotaalKrentenbollen = document.getElementById('productTotalCostC');
const subTotaalNoten = document.getElementById('productTotalCostD');
const subTotaal = document.getElementById('totalCost');

inputBrood.addEventListener('change',() => {
    updateValueBrood();
    updateTotalCost();
});

inputBrocolli.addEventListener('change',() => {
    updateValueBrocolli();
    updateTotalCost();
});

inputKrentenbollen.addEventListener('change',() => {
    updateValueKrentenbollen();
    updateTotalCost();
});

inputNoten.addEventListener('change',() => {
    updateValueNoten();
    updateTotalCost();
});


function updateValueBrood() {
    math = (1 * +inputBrood.value);
    subTotaalBrood.innerHTML = math.toFixed(2);
    return math.toFixed(2);
}

function updateValueBrocolli() {
    math = (0.99 * +inputBrocolli.value);
    subTotaalBrocolli.innerHTML = math.toFixed(2);
    return math.toFixed(2);
}

function updateValueKrentenbollen() {
    math = (1.20 * +inputKrentenbollen.value);
    subTotaalKrentenbollen.innerHTML = math.toFixed(2);
    return math.toFixed(2);
}

function updateValueNoten() {
    math = (2.99 * +inputNoten.value);
    subTotaalNoten.innerHTML = math.toFixed(2);
    return math.toFixed(2);
}

function updateTotalCost() {
    math = (+updateValueBrood() + +updateValueBrocolli() + +updateValueKrentenbollen() + +updateValueNoten());
    subTotaal.innerHTML = math.toFixed(2);
    return math.toFixed(2);
}