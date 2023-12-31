const lodash =require('lodash');

data = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    }
]
var mapValues = lodash.mapValues(data, (o) => {return o.title});
// console.log(mapValues) // mapvales in lodash
//foreach in lodash
var foreach = lodash.forEach(data, (i)=> {
    var count = i.rating.count;
    var add = lodash.add(1 + count);// add in lodash
    // console.log(add)
})
// console.log(foreach);



const getdatafunctionality = require('./calculator/functionality.js');
console.log(getdatafunctionality.value);
console.log(getdatafunctionality.add(100,50),'add')
console.log(getdatafunctionality.subtract(100,50),'subtract')
console.log(getdatafunctionality.multiply(100,50),'multiply')
console.log(getdatafunctionality.divide(100,50),'divide');

getdatafunctionality.calculate(5, 3, results => {
    console.log(results);
});
