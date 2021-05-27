

// icono lupa
const searchIcon = document.getElementById('inputSearch')
// barra buscadora
const $search = document.getElementById('search-container')

// armo un array con opciones para el buscador

let options = [
    {prod = 'Alfajores'}, 
    {prod = 'Chupetines'}, 
    {prod = 'Galletitas'}, 
    {prod = 'Chocolates'}, 
    {prod = 'Chicles'},
    {prod = 'Snacks'}, 
    {cat = 'Ofertas'}, 
    {cat = 'Regalos'}, 
    {cat = 'Categorias'}, 
    {cat = 'Marcas'},
];


const getOptions = (words) => {



options.forEach((option) => {
if (option.prod === words) {
    let $img = document.createElement("img");
    $img.src = product.image;
    $img.setAttribute("class", "search-img-cont");
    // img.textContent = product.name;
    SearchContainer.appendChild($img);
    console.log($img); 
}
})

}