let productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const getNombres = () => productos.map(producto => producto.nombre).join(', ')
const getPrecioTotal = () => {
    let total = 0
    productos.forEach(producto => {
        total += producto.precio
    })
    return total
}
const getPrecioPromedio = () => getPrecioTotal() / productos.length
const getProdPrecioMinimo = () => {
    let min = productos[0].precio
    let prod = productos[0].nombre
    for(let producto of productos) {
        if(producto.precio < min) {
            min = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}

const getProdPrecioMaximo = () => {
    let max = productos[0].precio
    let prod = productos[0].nombre
    for(let producto of productos) {
        if(producto.precio > max) {
            max = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}

function to2decimales(valor) {
    return Number(valor.toFixed(2))
}

let info = {
    nombres : getNombres(),
    total: to2decimales(getPrecioTotal()),
    promedio: to2decimales(getPrecioPromedio()),
    'Producto precio mínimo': getProdPrecioMinimo(),
    'Producto precio máximo': getProdPrecioMaximo(),
}

console.log(info)
