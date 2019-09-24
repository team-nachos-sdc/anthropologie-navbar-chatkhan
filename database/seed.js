const Product = require('./index.js');
const fs = require('fs');

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

const createSkirt = (index) => {
  let skirt = {};
  skirt.id = index;
  skirt.category = skirts.category[Math.floor(Math.random() * Math.floor(skirts.category.length))];
  skirt.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  skirt.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${skirts.adj[Math.floor(Math.random() * Math.floor(skirts.adj.length))]} ${skirt.category}`;
  return skirt;
}

const createDress = (index) => {
  let dress = {};
  dress.id = index;
  dress.category = dresses.category[Math.floor(Math.random() * Math.floor(dresses.category.length))];
  dress.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  dress.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${dresses.adj[Math.floor(Math.random() * Math.floor(dresses.adj.length))]} ${dress.category}`;
  return dress;
}

const createShirt = (index) => {
  let shirt = {};
  shirt.id = index;
  shirt.category = shirts.category[Math.floor(Math.random() * Math.floor(shirts.category.length))];
  shirt.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  shirt.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${shirts.adj[Math.floor(Math.random() * Math.floor(shirts.adj.length))]} ${shirt.category} `;
  return shirt;
}

const createBedding = (index) => {
  let bedding = {};
  bedding.id = index;
  bedding.category = beddings.category[Math.floor(Math.random() * Math.floor(beddings.category.length))];
  bedding.color = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  bedding.title = `${names[Math.floor(Math.random() * Math.floor(names.length))]} ${beddings.adj[Math.floor(Math.random() * Math.floor(beddings.adj.length))]} ${bedding.category} `;
  return bedding;
}

const createProducts = (func, type) => {
  let productsArr = [];
  if (type === 'skirt') {
    for (let i = 1; i <= 500000; i++) {
      productsArr.push(func(i))
    }
  }
  if (type === 'dress') {
    for (let i = 500001; i <= 100000; i++) {
      productsArr.push(func(i))
    }
  }
  if (type === 'shirt') {
    for (let i = 100001; i <= 150000; i++) {
      productsArr.push(func(i))
    }
  }
  if (type === 'bedding') {
    for (let i = 150001; i <= 200000; i++) {
      productsArr.push(func(i))
    }
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

function ConvertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ','

          line += array[i][index];
      }

      str += line + '\r\n';
  }

  return str;
};

const insertData = function () {
  let data = createProducts(createSkirt, 'skirt');
  data = data.concat(createProducts(createDress, 'dress'));
  data = data.concat(createProducts(createShirt, 'shirt'));
  data = data.concat(createProducts(createBedding, 'bedding'));
  // Product.insertMany(data);
  console.log(data.length);
  return data;
}

var wstream = fs.createWriteStream('massData.json');

function writeOneMillionTimes(writer, data, encoding, callback) {
  var i = 1;
  write();
  function write() {
    var ok = true;
    do {
      i -= 1;
      if (i === 0) {
        var setData = JSON.stringify(data());
        // setData = ConvertToCSV(setData);
        // last time!
        console.log('This is the last write!!!');
        writer.write(setData, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        var setData = JSON.stringify(data());
        // setData = ConvertToCSV(setData);
        ok = writer.write(setData, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}
writeOneMillionTimes(wstream, insertData, 'utf8', function(err, result) {
    if (err) {
      console.log('error', err);
    } else {
      console.log(result);
    }
})

// const productString = JSON.stringify(insertData());

// fs.writeFile("massData.json", productString, function(err, result) {
//   if (err) {
//     console.log('error', err)
//   } else {
//     console.log('first write', result);

//   }
// })