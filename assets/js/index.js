import products from "./db.js";

const container = document.getElementById("container"); 
const container2 = document.getElementById("container2");
const infoProdCont = document.getElementById("info-prod");

const btnAlfajor = document.getElementById("alfajor");
const btnChicle = document.getElementById("chicle");
const btnSnack = document.getElementById("snack");
const btnGalles = document.getElementById("galletita");
const btnChoco = document.getElementById("chocolate");
const btnChupetin = document.getElementById("chupetin");

btnAlfajor.addEventListener("click", () => {
  getProducts("alfajor");
});
btnChicle.addEventListener("click", () => {
  getProducts("chicle");
});
btnSnack.addEventListener("click", () => {
  getProducts("snacks");
});
btnGalles.addEventListener("click", () => {
  getProducts("galletita");
});
btnChoco.addEventListener("click", () => {
  getProducts("chocolate");
});
btnChupetin.addEventListener("click", () => {
  getProducts("chupetin");
});

const getProducts = (categoria) => {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  let total = 0;

  products.forEach((product) => {
    if (product.category === categoria) {
      let image = document.createElement("img");
      image.src = product.image;
      image.setAttribute("class", "container-prods-img");
      container.appendChild(image);

      let h2 = document.createElement("h2");
      h2.setAttribute("class", "titulo");
      h2.setAttribute("class", "info-prod-cont");
      h2.textContent = product.name;
      h2.setAttribute("class", "container-prods");
      container.appendChild(h2);

      let p1 = document.createElement("p");
      p1.textContent = product.price;
      p1.setAttribute("class", "container-prods");
      container.appendChild(p1);

      // ----- pruebo agregar div contenedeor ---
        let divInfo = document.createElement("div");

        divInfo.setAttribute("class", "info-prod-cont");
        container.appendChild(divInfo);
        // hasta aca

      if (product.stock > 0) {
        let count = document.createElement("input"); // Crea un input
        count.setAttribute("type", "number"); // A ese input de asigna un atributo (type="number")
        count.setAttribute("id", `count_${product.id}`); // A ese input de doy un id (id="product_NUMERO")
        count.setAttribute("value", 1); // A ese input le asignamois el valor 1
        count.setAttribute("class", "container-prods");
        container.appendChild(count); // insertamos en el container ese input

        let cantidad = document.getElementById(`count_${product.id}`); // Capturamos ese input para manipularlo

        

 


        let btnPurchase = document.createElement("button"); // Crea un botón
        btnPurchase.setAttribute("id", `btn_${product.id}`); // Le da una ID
        btnPurchase.textContent = "Agregar al carrito"; // Le da un contenido en forma de texto
        btnPurchase.setAttribute("class", "container-prods-btn");
        container.appendChild(btnPurchase); //insertamos en el container ese botón

        let btnRemove = document.createElement("button"); // Crea un botón
        btnRemove.setAttribute("id", `btn_${product.id}`); // Le da una ID
        btnRemove.textContent = "Quitar del carrito"; // Le da un contenido en forma de texto
        btnRemove.setAttribute("class", "container-prods-btn");
        container.appendChild(btnRemove); //insertamos en el container ese botón

        btnRemove.addEventListener("click", () => {
          // Al botón le asignamos un evento de escucha

          // let subtotal = product.price * cantidad.value; // Cantidad * precio
          
          // console.log(getLocalStorage);
          // if (getLocalStorage) {
          //   total = Number(getLocalStorage) + Number(subtotal);
          //   console.log(total);
          // }
          // // total += subtotal;
          // console.log(total);
          // localStorage.setItem("total", total);
          /* aca llamamos con la funcion para que nos diga que producto agregamos */
          localStorage.setItem('total', product.price);
          remCallback(product.name) 
        });


        btnPurchase.addEventListener("click", () => {
          // Al botón le asignamos un evento de escucha

          let subtotal = product.price * cantidad.value; // Cantidad * precio
          let getLocalStorage = localStorage.getItem("total");
          console.log(getLocalStorage);
          if (getLocalStorage) {
            total = Number(getLocalStorage) + Number(subtotal);
            console.log(total);
          }
          // total += subtotal;
          console.log(total);
          localStorage.setItem("total", total);
          /* aca llamamos con la funcion para que nos diga que producto agregamos */
          addCallback(product.name) 
        });
      } else {
        let p = document.createElement("p");
        p.textContent = "No hay en stock";
        container.appendChild(p);
      }
    }
  });


};

// agregamos funcion callback 

function addCallback(callback) {
  alert(`Ha añadido ${callback}`);
}

function remCallback(callback) {
  alert(`Ha quitado el producto ${callback}`);
}

function one()
