// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  count = 0;

  _.each(numbers, function(element, index) {
    if (element % 5 === 0) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
  // eslint-disable-next-line indent-legacy
  if (fruit[0] === letter) {
    return fruit;

  // should be return fruit[0] === letter
  }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {


  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert.name;
    }

  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(memo, item, index, products) {
    return Number(item.price.slice(1)) + memo;
  }, 0);


};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {


  return _.reduce(desserts, function(memo, item, index, desserts) {
    if (memo[item.type] === undefined) {
      memo[item.type] = 1;
    } else {
      memo[item.type] ++;
    }
    return memo;
  }, {});


};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(memo, item, index, movies) {
    if (movies[index].releaseYear > 1989 && movies[index].releaseYear < 2001) {
      memo.push(movies[index].title);
    }
    return memo;
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, item, index, movies) {
    if (movies[index].runtime < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(string) {
    string.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
  });

  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  _.map(groceries, function(item) {
    var price = item.price.slice(1);
    var discount = 1 - coupon;
    item.salePrice = '$' + (price * discount).toFixed(2);
    return item;
  });
  return groceries;
};
