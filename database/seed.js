const Product = require('./index.js');

const colors = ['White', 'Coral', 'Salt', 'Forest', 'Citron', 'Chiffon', 'Bone', 'Blush', 'Porcelain', 'Mustard', 'Egg Shell', 'Lace', 'Pearl', 'Canary', 'Daffofil', 'Honey', 'Marigold', 'Honey', 'Currant']
const names = ['Robin', 'Brigitte', 'Massima', 'Saiorse', 'Astrid', 'Leslie', 'Gisella', 'Vega', 'Anastasia', 'Finley', 'Marnita', 'Faithfull', 'Diane', 'Rossi', 'Roxie', 'Boswell', 'Katrina', 'Kantha', 'Sophie', 'Makura', 'Helena', 'Adelina', 'Rivulets', 'Dahlia', 'Coren', 'Joanna', 'Edna', 'Majorelle', 'Tasmin', 'Martina', 'Vineet Bahl', 'Meguro']

const image = 'https://s7d5.scene7.com/is/image/Anthropologie/45405720AA_074_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'

const skirts = {
  category: ['Maxi Skirt', 'Midi Skirt', 'Mini Skirt', 'A-Line Skirt'],
  adj: ['Floral', 'Emboidered', 'Jacquard', 'Beaded', 'Tiered', 'Pleated', 'Flared']
}

const dresses = {
  category: ['Maxi Dress', 'Midi Dress', 'Mini Dress', 'Sheath Dress', 'Tunic Dress', 'Wrap Dress'],
  adj: ['Floral', 'Emboidered', 'Jacquard', 'Beaded', 'Tiered', 'Pleated', 'Flared']
}

const pants = {
  category: ['Pants', 'Trousers', 'Joggers', 'Jeans', 'Jumpsuit', 'Harem', 'Leggings'],
  adj: ['Floral', 'Utility', 'Flared', 'Straight-leg', 'Slim-leg', 'Wide-leg', 'Printed', 'Cropped']
}

const beddings = {
  category: ['Pillow', 'Quilt', 'Duvet Cover', 'Throw', 'Bed Skirt', 'Sham'],
  adj: ['Faux Fur', 'Velvet', 'Hand-Stitched', 'Linen', 'Silk', 'Bardot', 'Fringe', 'Tasseled', 'Ruched', 'Ikat', 'Jersey']
}

const createSkirt = () => {
  let skirt = {};
  skirt.category = skirts.category[Math.floor(Math.random() * Math.floor(skirts.category.length))];
  skirt.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  skirt.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${skirts.adj[Math.floor(Math.random() * Math.floor(skirts.adj.length))]} ${skirt.category}`;
  skirt.image = image;
  return skirt;
}

const createDress = () => {
  let dress = {};
  dress.category = dresses.category[Math.floor(Math.random() * Math.floor(dresses.category.length))];
  dress.color = colors[Math.floor(Math.random() * Math.floor(colors.length))]; 
   
  dress.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${dresses.adj[Math.floor(Math.random() * Math.floor(dresses.adj.length))]} ${dress.category}`;
  dress.image = image;
  return dress;
}

const createPant = () => {
  let pant = {};
  pant.category = pants.category[Math.floor(Math.random() * Math.floor(pants.category.length))];
  pant.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  pant.title = `${ names[Math.floor(Math.random() * Math.floor(names.length))] } ${ pants.adj[Math.floor(Math.random() * Math.floor(pants.adj.length))] } ${ pant.category } `;
  pant.image = image;
  return pant;
}

const createBedding = () => {
  let bedding = {};
  bedding.category = beddings.category[Math.floor(Math.random() * Math.floor(beddings.category.length))];
  bedding.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  bedding.title = `${ names[Math.floor(Math.random() * Math.floor(names.length))] } ${ beddings.adj[Math.floor(Math.random() * Math.floor(beddings.adj.length))] } ${ bedding.category } `;
  bedding.image = image;
  return bedding;
}

const createProducts = (func) => {
  let productsArr = [];
  for (let i = 0; i < 25; i++) {
    productsArr.push(func())
  }
  return productsArr;
}

const insertData = function () {
  let data = createProducts(createSkirt);
  data = data.concat(createProducts(createDress));
  data = data.concat(createProducts(createPant));
  data = data.concat(createProducts(createBedding));
  Product.insertMany(data);
}

insertData()