import express from 'express';



const router = express.Router();

let product = [
    {
      id: '1',
      title: 'PC',
      price: '123.45',
      thumbnail:
        'https://sanlorenzo.com.ar/img/plantel/futbol/2020/g/sebastian-torrico.jpg',
    },
    {
      id: '2',
      title: 'Netbook',
      price: '234.56',
      thumbnail:
        'https://www.rionegro.com.ar/wp-content/uploads/2021/05/aNGEL-ROMERO.jpg?w=920&h=517&resize=920,517',
    },
    {
      id: '3',
      title: 'PlayStatation',
      price: '345.67',
      thumbnail:
        'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    },
  ];

router.put('/productos/actualizar/:id', (req, res) => {
  res.json({
    title:'Nuevo Producto',
    price:'123',
    thumbnail: 'url'
  });
});

router.delete('/productos/borrar/:id', (req, res) => {
 
  res.json({
    msg:'Usuario Eliminado',
    title: 'Producto Eliminado',
    price:'123',
    thumbnail: 'url'

  });
});

router.get('/productos/vista', (req, res) => {
   
        res.render("main", {product});
})
export default router;