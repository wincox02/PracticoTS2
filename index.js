var allPersons = [];
var itemsPerPage = 5;
fetch('https://swapi.dev/api/people')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    document.getElementById("busqueda").style.display = "block";
    document.getElementById("PageNavigation").style.display = "block";
    allPersons = data.results; // Accede a la lista de personas
    // Preparar el HTML de la tabla
    var tableHTML = '<thead><tr><th><button type="button" class="btn btn-link" onclick=sortPersons("name")>Name</button></th><th>Gender</th><th>Eye Color</th><th><button type="button" class="btn btn-link" onclick=sortPersons("height")>Altura</button></th></tr></thead><tbody>';
    // Loop a través de todas las personas para generar filas en la tabla
    allPersons.forEach(function (person) {
        tableHTML += "<tr><td>".concat(person.name, "</td><td>").concat(person.gender, "</td><td>").concat(person.eye_color, "</td><td>").concat(person.height, "</td></tr>");
    });
    tableHTML += '</tbody>';
    // Grab table element to set its inner HTML
    document.querySelector('#tableElement').innerHTML = tableHTML;
    // Hide spinner
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});
//manejadores
function filterPersons(filtro) {
    var filterPersons = allPersons.filter(function (p) { return p.name.toLowerCase().includes(filtro.toLowerCase()); });
    console.log(filterPersons);
}
function sortPersons(columna) {
    var sortedPersons = allPersons.toSorted(function (a, b) { return a[columna] > b[columna] ? 1 : a[columna] < b[columna] ? -1 : 0; });
    console.log('sortedPersons', sortedPersons);
}
function paginatePersons(page) {
    var paginatedPersons = allPersons.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    console.log("paginatedPersons", paginatedPersons);
}
