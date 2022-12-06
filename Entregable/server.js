const http = require('http')

const crearProducto = () => {
    let id = parseInt(Math.random()*10) + 1 
    return {
        id,
        title:'Producto ' + id,
        price: Number((Math.random()*10000).toFixed(2)),
        thumbnail: 'Foto ' + id,
    }
} 

const server = http.createServer((req,res) => {
    res.end(JSON.stringify(crearProducto()))
})

const PORT = process.env.PORT || 8080

server.listen(PORT, function() {
    console.log(`Servidor Http escuchando en el puerto ${this.address().port}`)
})
