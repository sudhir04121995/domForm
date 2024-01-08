function submitForm() {
    var form = document.getElementById("myForm");
    var foodSelect = form.elements["food[]"];

   
    if (foodSelect.selectedOptions.length < 2) {
        alert("Please select at least 2 food options.");
        return;
    }

    var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

   
    for (var i = 0; i < form.elements.length - 2; i++) {
        var cell = newRow.insertCell(i);
        var element = form.elements[i];

       
        if (element.name === "food[]") {
            var selectedFood = [];
            for (var j = 0; j < element.selectedOptions.length; j++) {
                selectedFood.push(element.selectedOptions[j].value);
            }
            cell.innerHTML = selectedFood.join(', '); 
        } else {
            cell.innerHTML = element.value;
        }
    }

    clearForm();
}


function clearForm() {
    var form = document.getElementById("myForm");
    form.reset();
}