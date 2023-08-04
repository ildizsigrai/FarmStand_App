const mongoose = require("mongoose");
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
          console.log("MONGO CONNECTION IS OPEN")
  })
  .catch(err => {
          console.log("OH NOOO MONGO CONNECTION ERROR");
          console.log(err);
  })



const seedProducts = [
  {
    name: 'Grapefruit',
    price: 1.99,
    category: 'fruit'
  },
  {
    name: 'Melon',
    price: 7.69,
    category: 'fruit'
  },
  {
    name: 'Celery',
    price: 4.99,
    category: 'vegetable'
  },
  {
    name: 'Milk',
    price: 2.99,
    category: 'dairy'
  }
]
 
Product.insertMany(seedProducts)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log(e)
  })