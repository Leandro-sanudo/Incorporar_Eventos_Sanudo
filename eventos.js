//Array de objetos
const Productos = [
    { id: 1, nombre: "Parasite in Love", precio: 500, stock: 5},
    { id: 2, nombre: "Asper Girl", precio: 300, stock: 10},
    { id: 3, nombre: "Servant x Service", precio: 500, stock: 15},
    { id: 4, nombre: "Thank You", precio: 250, stock: 5},
    { id: 5, nombre: "Utsubora", precio: 200, stock: 10}
];

//Carrito de compras
let carrito = [];

const resultado1 = Productos.find((producto) => producto.id === 1)
const resultado2 = Productos.find((producto) => producto.id === 2)
const resultado3 = Productos.find((producto) => producto.id === 3)
const resultado4 = Productos.find((producto) => producto.id === 4)
const resultado5 = Productos.find((producto) => producto.id === 5)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)

//Llamado de los elementos del HTML con querySelector
let btnProducto1 = document.querySelector("#btnProducto1")
let btnProducto2 = document.querySelector("#btnProducto2")
let btnProducto3 = document.querySelector("#btnProducto3")
let btnProducto4 = document.querySelector("#btnProducto4")
let btnProducto5 = document.querySelector("#btnProducto5")
let btnCarrito = document.querySelector("#btnCarrito")
let btnRemover = document.querySelector("#btnRemover")

//Asignación del evento a cada boton
btnProducto1.onclick = () => (carrito.push(resultado1))
btnProducto2.onclick = () => (carrito.push(resultado2))
btnProducto3.onclick = () => (carrito.push(resultado3))
btnProducto4.onclick = () => (carrito.push(resultado4))
btnProducto5.onclick = () => (carrito.push(resultado5))
btnCarrito.onclick = () => (alert("Productos actualmente en el carrito:"+carrito.length))
btnRemover.onclick = () => (carrito.pop())

//btnCarrito.onclick = () => (console.log(totalCarrito))
//const totalCarrito = carrito.reduce((total, productos) => total + productos.precio, 0)