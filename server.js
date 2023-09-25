const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//var mongoose = require('mongoose')
app.use(express.static("ecommerce"))

//mongoose.connect("mongodb://localhost:27017")
app.use(express.json())

// app.get('**', (req, res) => {
//     res.redirect('/')
// })

app.get('/products', (req, res) => {
    let products = [
        {
            "id": 1,
            "description": "Camiseta Vermelha",
            "size": 'GG',
            "color": 'vermelho',
            "photo": 'red-shirt.png',
            "longDescription": "LemonChiffon T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.",
            "price": 330.96
        },
        {
            "id": 2,
            "description": "Camiseta Vermelha",
            "size": 'P',
            "color": 'vermelho',
            "photo": 'red-shirt.png',
            "longDescription": "LemonChiffon T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.",
            "price": 330.96
        },
        {
            "id": 3,
            "description": "Camiseta Vermelha",
            "size": 'M',
            "color": 'vermelho',
            "photo": 'red-shirt.png',
            "longDescription": "LemonChiffon T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.",
            "price": 330.96
        },
        {
            "id": 4,
            "description": "Camiseta Verde",
            "size": 'M',
            "color": 'verde',
            "photo": 'green-shirt.png',
            "longDescription": "DarkGreen T-shirt Vitae omnis neque consequatur illo repellat quaerat doloribus. At ab iure modi et autem. Dolor ex eveniet architecto aut est. Est veritatis nostrum incidunt dolorum et eum. Culpa et voluptatem accusamus id debitis voluptates magnam molestiae.",
            "price": 386.22
        },
        {
            "id": 5,
            "description": "Camiseta Verde",
            "size": 'G',
            "color": 'verde',
            "photo": 'green-shirt.png',
            "longDescription": "DarkGreen T-shirt Vitae omnis neque consequatur illo repellat quaerat doloribus. At ab iure modi et autem. Dolor ex eveniet architecto aut est. Est veritatis nostrum incidunt dolorum et eum. Culpa et voluptatem accusamus id debitis voluptates magnam molestiae.",
            "price": 386.22
        },
        {
            "id": 6,
            "description": "Camiseta Verde",
            "size": 'P',
            "color": 'verde',
            "photo": 'green-shirt.png',
            "longDescription": "DarkGreen T-shirt Vitae omnis neque consequatur illo repellat quaerat doloribus. At ab iure modi et autem. Dolor ex eveniet architecto aut est. Est veritatis nostrum incidunt dolorum et eum. Culpa et voluptatem accusamus id debitis voluptates magnam molestiae.",
            "price": 386.22
        },
        {
            "id": 7,
            "description": "Camiseta Azul",
            "size": 'GG',
            "color": 'azul',
            "photo": 'blue-shirt.png',
            "longDescription": "HoneyDew T-shirt Voluptatem nihil assumenda ut. Optio labore consequatur iusto qui nam corporis. Assumenda neque molestias voluptatem doloribus molestias ut quibusdam velit. Omnis quia occaecati officiis non laborum quo unde. Voluptatem ut consequatur consequatur dolore praesentium fugit.",
            "price": 293.42
        },
        {
            "id": 8,
            "description": "Camiseta Azul",
            "size": 'P',
            "color": 'azul',
            "photo": 'blue-shirt.png',
            "longDescription": "HoneyDew T-shirt Voluptatem nihil assumenda ut. Optio labore consequatur iusto qui nam corporis. Assumenda neque molestias voluptatem doloribus molestias ut quibusdam velit. Omnis quia occaecati officiis non laborum quo unde. Voluptatem ut consequatur consequatur dolore praesentium fugit.",
            "price": 293.42
        }
    ]
    res.json(products)
})

app.listen(port, () => {
    console.log('Node server is running on ecommerce-app.up.railway.app')
})