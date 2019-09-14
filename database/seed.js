const Product = require('./index.js');

const colors = ['white', 'Coral', 'Sass', 'Sassima', 'Salt', 'Forest', 'Citron', 'Chiffon', 'Bone', 'Porcelain', 'Mustard', 'Egg Shell', 'Lace', 'Pearl', 'Canary', 'Daffofil', 'Honey', 'Marigold', 'Honey', 'Currant']
const names = ['Robin', 'Brigitte', 'Massima', 'Saiorse', 'Astrid', 'Leslie', 'Gisella', 'Vega', 'Anastasia', 'Finley', 'Marnita', 'Faithfull', 'Diane', 'Rossi', 'Roxie', 'Boswell', 'Katrina', 'Kantha', 'Sophie', 'Makura', 'Helena', 'Adelina', 'Rivulets', 'Dahlia', 'Coren', 'Joanna', 'Edna', 'Majorelle', 'Tasmin', 'Martina', 'Vineet Bahl', 'Meguro']

const skirtImages = ['./images/skirt1.webp', './images/skirt2.webp', './images/skirt3.webp', './images/skirt4.webp', './images/skirt5.webp', './images/skirt6.webp'];
const whiteImages = ['./images/white1.webp', './images/white2.webp', './images/white3.webp', './images/white4.webp', './images/white5.webp', './images/white6.webp'];
const shirtImages = ['./images/shirt1.webp', './images/shirt2.webp', './images/shirt3.webp', './images/shirt4.webp', './images/shirt5.jpeg', './images/shirt6.jpeg'];

const skirts = {
  category: ['Maxi Skirt', 'Midi Skirt', 'Mini Skirt', 'A-Line Skirt'],
  adj: ['Floral', 'Emboidered', 'Jacquard', 'Beaded', 'Tiered', 'Pleated', 'Flared']
}

const dresses = {
  category: ['Maxi Dress', 'Midi Dress', 'Mini Dress', 'Sheath Dress', 'Tunic Dress', 'Wrap Dress'],
  adj: ['Floral', 'Emboidered', 'Jacquard', 'Beaded', 'Tiered', 'Pleated', 'Flared']
}

const shirts = {
  category: ['Shirt'],
  adj: ['Floral', 'Utility', 'Button-down', 'Emboidered', 'Wide-Sleeve', 'Printed', 'Cropped', 'Linen']
}

const beddings = {
  category: ['Pillow', 'Quilt', 'Duvet Cover', 'Throw', 'Bed Skirt', 'Sham'],
  adj: ['Faux Fur', 'Sheer', 'Velvet', 'Hand-Stitched', 'Linen', 'Silk', 'Bardot', 'Fringe', 'Tasseled', 'Ruched', 'Ikat', 'Jersey']
}

const createSkirt = () => {
  let skirt = {};
  skirt.category = skirts.category[Math.floor(Math.random() * Math.floor(skirts.category.length))];
  skirt.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  skirt.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${skirts.adj[Math.floor(Math.random() * Math.floor(skirts.adj.length))]} ${skirt.category}`;
  return skirt;
}

const createDress = () => {
  let dress = {};
  dress.category = dresses.category[Math.floor(Math.random() * Math.floor(dresses.category.length))];
  dress.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  dress.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${dresses.adj[Math.floor(Math.random() * Math.floor(dresses.adj.length))]} ${dress.category}`;
  return dress;
}

const createShirt = () => {
  let shirt = {};
  shirt.category = shirts.category[Math.floor(Math.random() * Math.floor(shirts.category.length))];
  shirt.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  shirt.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${shirts.adj[Math.floor(Math.random() * Math.floor(shirts.adj.length))]} ${shirt.category} `;
  return shirt;
}

const createBedding = () => {
  let bedding = {};
  bedding.category = beddings.category[Math.floor(Math.random() * Math.floor(beddings.category.length))];
  bedding.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  bedding.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${beddings.adj[Math.floor(Math.random() * Math.floor(beddings.adj.length))]} ${bedding.category} `;
  return bedding;
}

const createProducts = (func) => {
  let productsArr = [];
  for (let i = 0; i < 25; i++) {
    productsArr.push(func())
  }
  for (var i = 0; i < productsArr.length; i++) {
    if (productsArr[i].color === 'white') {
      let index = Math.floor(Math.random() * whiteImages.length / 2) * 2;
      productsArr[i].image1 = whiteImages[index]
      productsArr[i].image2 = whiteImages[index + 1]
    }
    else if (productsArr[i].title.includes('Skirt')) {
      let index = Math.floor(Math.random() * skirtImages.length / 2) * 2;
      productsArr[i].image1 = skirtImages[index]
      productsArr[i].image2 = skirtImages[index + 1]
    } else {
      let index = Math.floor(Math.random() * shirtImages.length / 2) * 2;
      productsArr[i].image1 = shirtImages[index]
      productsArr[i].image2 = shirtImages[index + 1]
    }
  }
  return productsArr;
}

const insertData = async function () {
  let data = createProducts(createSkirt);
  data = data.concat(createProducts(createDress));
  data = data.concat(createProducts(createShirt));
  data = data.concat(createProducts(createBedding));
  Product.insertMany(data);
}

insertData();

// const millionEntries = function() {
//   for (var i = 0; i < 400; i++) {
//   insertData()
//   .then(() => insertData()
//   .then(() => insertData()
//   .then(() => insertData())))
//   }
// }

// millionEntries();