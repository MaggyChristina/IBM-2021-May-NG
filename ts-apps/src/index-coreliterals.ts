//literals
let firstName = "Subramanian";
let lastName = 'Murugan'
//log this
console.log("First Name " + firstName);
console.log("First Name " , firstName);
//template litreal or string interpolation  `${}`
console.log(`First Name ${firstName}`);
//multi line string literals
let title = 'IBM'
let htmlPage =`
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);

//Numbers
let a = 100;
let b = 200;
console.log(`Numbers a ${a} b ${b}`)

//booleans
let isValid = true;
let isEnabled = false;
console.log(`Booleans isValid ${isValid} isEnabled ${isEnabled}`)

//undefiend
let price;
let qty;
console.log(`price ${price} qty ${qty}`);

//NaN
let totalPrice = price * 1000;
console.log(`Total Price ${totalPrice}`)

//Type conversion
let count = "10"; // it string type but value is numerical value

//Type conversion happened here; implicit conversion
let totalCount = count * 10;
console.log(`Total Count ${totalCount}`);

//Type conversion using js built in api.
//double(64 bit) to 32 bit(integer)
let totalCounter = parseInt(count) * 10;
console.log(`Total Count ${totalCounter}`);
let totalCounterdouble = parseFloat(count,16) * 10;
console.log(`Total Count ${totalCounterdouble}`);

//Nan and type conversion
// here $100 is not numerical so during type conversion, error is thrown.
let stockValue = "$100";
let totalStock  = parseInt(stockValue) * 100;
console.log(`Total Stock ${totalStock}`);

//infinity
//div by 0
let newprice = 1000;
let avgPrice = newprice / 0;
//Avg Price Infinity
console.log(`Avg Price ${avgPrice}`);