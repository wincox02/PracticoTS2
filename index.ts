let allPersons = []
const itemsPerPage: number = 5

fetch('https://swapi.dev/api/people')
  .then(res => res.json())
  .then((data) => {
    document.getElementById("busqueda").style.display = "block";
    document.getElementById("PageNavigation").style.display = "block";
    allPersons = data.results; // Accede a la lista de personas


    // Preparar el HTML de la tabla
    let tableHTML: string = '<thead><tr><th><button type="button" class="btn btn-link" onclick=sortPersons("name")>Name</button></th><th>Gender</th><th>Eye Color</th><th><button type="button" class="btn btn-link" onclick=sortPersons("height")>Altura</button></th></tr></thead><tbody>';

    // Loop a través de todas las personas para generar filas en la tabla
    allPersons.forEach((person: any) => {
      tableHTML += `<tr><td>${person.name}</td><td>${person.gender}</td><td>${person.eye_color}</td><td>${person.height}</td></tr>`;
    });

    tableHTML += '</tbody>';
    // Grab table element to set its inner HTML
    document.querySelector('#tableElement')!.innerHTML = tableHTML;
    // Hide spinner
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';
  });

//manejadores

function filterPersons(filtro: String){
  const filterPersons = allPersons.filter((p) => p.name.toLowerCase().includes(filtro.toLowerCase()))
  console.log(filterPersons)
}

function sortPersons(columna: string){
  const sortedPersons = allPersons.toSorted((a,b) => a[columna] > b[columna] ? 1 : a[columna] < b[columna] ? -1 : 0);
  console.log('sortedPersons',sortedPersons)
}

function paginatePersons(page: number){
  const paginatedPersons = allPersons.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
  console.log("paginatedPersons", paginatedPersons)
}