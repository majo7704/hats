let hat = {
  name: 'Baseball cap',
  price: '<price>',
  color: '<color>',
  image: '<imgHref>'
};
typeof hat.toString();
console.log(hat);

function Hat(name, price, color, image) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.image = image;
  Hat.prototype.toString = function () {
    console.log(hat.toString());
  }
};

var redHat = new Hat("Baseball cap", 11.99, "red", "image");
console.log(redHat);