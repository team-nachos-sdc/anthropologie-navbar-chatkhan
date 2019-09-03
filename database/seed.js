const Product = require('./index.js');

const colors = ['White', 'Coral', 'Salt', 'Forest', 'Citron', 'Chiffon', 'Bone', 'Blush', 'Porcelain', 'Mustard', 'Egg Shell', 'Lace', 'Pearl', 'Canary', 'Daffofil', 'Honey', 'Marigold', 'Honey', 'Currant']
const names = ['Robin', 'Brigitte', 'Massima', 'Saiorse', 'Astrid', 'Leslie', 'Gisella', 'Vega', 'Anastasia', 'Finley', 'Marnita', 'Faithfull', 'Diane', 'Rossi', 'Roxie', 'Boswell', 'Katrina', 'Kantha', 'Sophie', 'Makura', 'Helena', 'Adelina', 'Rivulets', 'Dahlia', 'Coren', 'Joanna', 'Edna', 'Majorelle', 'Tasmin', 'Martina', 'Vineet Bahl', 'Meguro']

const whiteImages = ['https://s7d5.scene7.com/is/image/Anthropologie/4110448540801_010_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110448540801_010_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110347470008_010_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110347470008_010_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110074060077_010_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110074060077_010_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'];

const shirtImages = ['https://s7d5.scene7.com/is/image/Anthropologie/4110581480005_037_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4110581480005_037_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4133583310006_031_b14?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4133583310006_031_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/49533185_040_m?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/49533185_040_m2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain'];

const skirtImages = ['https://s7d5.scene7.com/is/image/Anthropologie/4120074060005_066_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4120074060005_066_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4120436990007_018_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4120436990007_018_b2?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4120019030025_025_b14?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain', 'https://s7d5.scene7.com/is/image/Anthropologie/4120019030025_025_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain']

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
  return skirt;
}

const createDress = () => {
  let dress = {};
  dress.category = dresses.category[Math.floor(Math.random() * Math.floor(dresses.category.length))];
  dress.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  dress.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${dresses.adj[Math.floor(Math.random() * Math.floor(dresses.adj.length))]} ${dress.category}`;
  return dress;
}

const createPant = () => {
  let pant = {};
  pant.category = pants.category[Math.floor(Math.random() * Math.floor(pants.category.length))];
  pant.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  pant.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${pants.adj[Math.floor(Math.random() * Math.floor(pants.adj.length))]} ${pant.category} `;
  return pant;
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
    if (productsArr[i].color === 'White') {
      let index = Math.floor(Math.random() * whiteImages.length / 2) * 2;
      productsArr[i].image1 = whiteImages[index]
      productsArr[i].image2 = whiteImages[index + 1]
    }
    else if (productsArr[i].title.includes('skirt')) {
      let index = Math.floor(Math.random() * skirtImages.length / 2) * 2;
      productsArr[i].image1 = skirtImages[index]
      productsArr[i].image2 = skirtImages[index + 1]
    } else {
      let index = Math.floor(Math.random() * shirtImages.length / 2) * 2;
      productsArr[i].image1 = shirtImages[index]
      productsArr[i].image2 = shirtImages[index + 1]
    }
  }
  console.log(productsArr.length)
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