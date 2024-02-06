

let CostEl = document.querySelector('#Cost')

CostEl.addEventListener('change', calcTotal);

function calcTotal() {
    var numCost = (parseInt(CostEl.value, 6) || 1) * 15;
    document.querySelector("#numCost").value = numCost;
}
