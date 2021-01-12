/************************************
 * todo forEach method
 ***********************************/
{
  const numbers = [1, 5, 4, 8, 4, 6, 2];

  numbers.forEach((element, index, array) => {
    console.log(`${index} : ${element}`);
  });

  const letters = ["a", "b", "d", "f", "a", "d", "d", "c"];
  const count = {};

  letters.forEach((el) => {
    if (count[el]) {
      count[el]++;
    } else {
      count[el] = 1;
    }
  });

  console.log(count);
}

/************************************
 * todo map method
 ***********************************/
{
  const num = [1, 2, 3, 4, 5];

  const newNum = num.map((value, index, arr) => {
    return value * index;
  });
  console.log(newNum);

  const products = [
    {
      name: "laptop",
      price: 500,
      count: 10,
    },
    {
      name: "desktop",
      price: 100,
      count: 8,
    },
    {
      name: "mobile",
      price: 300,
      count: 5,
    },
  ];

  const totalProductPrice = products.map((el) => {
    return {
      name: el.name,
      price: el.price * el.count,
    };
  });

  console.log(totalProductPrice);

  const strNum = ["1", "2", "3", "4"];
  const num2 = strNum.map(Number);
  console.log(num2);
}

/************************************
 * todo filter method
 ***********************************/
{
  const evenNum = [1, 2, 3, 4, 5, 6];
  const even = evenNum.filter((value, index, arr) => {
    return value % 2 === 0;
  });
  console.log(even);

  const person = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Tanvir",
      age: 22,
    },
    {
      name: "Panda",
      age: 17,
    },
  ];

  const adult = person.filter((value) => {
    return value.age >= 18;
  });
  console.log(adult);
}

/************************************
 * todo reduce method
 ***********************************/
{
  const reduceNumber = [2, 5, 1, 4, 6, 7, 5];
  const reduceTotal = reduceNumber.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log(reduceTotal);

  const reduceStore = [
    {
      name: "laptop",
      price: 500,
      count: 10,
    },
    {
      name: "desktop",
      price: 100,
      count: 8,
    },
    {
      name: "mobile",
      price: 300,
      count: 5,
    },
  ];

  const totalValueStore = reduceStore.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  console.log(totalValueStore);
}

/************************************
 * todo slice method
 ***********************************/
{
  const sliceNumber = [2, 5, 1, 4, 6, 7, 5];
  //const sliceNumberRes = sliceNumber.slice(2, 6);
  //const sliceNumberRes = sliceNumber.slice(2, sliceNumber.length);
  //const sliceNumberRes = sliceNumber.slice(-3);
  const sliceNumberRes = sliceNumber.slice(1);
  console.log(sliceNumberRes);
}

/************************************
 * todo splice method
 ***********************************/
{
  const spliceNumber = [1, 3, 2, 4, 6, 7];
  const spliceDeleted = spliceNumber.splice(2, 4, 5, 8);
  console.log(spliceNumber);
  console.log(spliceDeleted);
}

/************************************
 * todo sort method
 ***********************************/
{
  const sortString = ["e", "b", "c", "a", "d"];
  sortString.sort((a, b) => {
    console.log(a);
    console.log(b);
  });
  console.log(sortString);

  const sortNumber = [2, 5, 1, 3, 4, 7, 6];
  sortNumber.sort((a, b) => a - b);
  console.log(sortNumber);

  const sortProduct = [
    {
      name: "Laptop",
      price: 1500,
    },
    {
      name: "Desktop",
      price: 500,
    },
    {
      name: "Phone",
      price: 1000,
    },
  ];

  sortProduct.sort((a, b) => a.price - b.price);
  console.log(sortProduct);
}

/************************************
 * todo concat method
 ***********************************/
{
  const a = [1, 2, 3, 4];
  const b = [4, 5, 6, 7];
  const c = [8, 9, 10];

  const d = a.concat(b, c);
  console.log(d);
  console.log(a);
  console.log(b);
  console.log(c);
}

/************************************
 * todo fill method
 ***********************************/
{
  const fillNumbers = [1, 2, 3, 4, 5, 6];
  fillNumbers.fill(0);
  console.log(fillNumbers);

  const fillNumbers2 = [1, 2, 3, 4, 5, 6];
  fillNumbers2.fill("tanvir", 1, 4);
  console.log(fillNumbers2);

  function fillInNumbers(n) {
    return Array(n)
      .fill(0)
      .map((el, idx) => idx + 1);
  }
  console.log(fillInNumbers(10));
}

/************************************
 * todo includes method
 ***********************************/
{
  const names = ["Tanvir", "Israk", "Polash", "Jahid", "Tuhin"];
  const res = names.includes("Tanvir");
  console.log(res);

  if (res) {
    console.log("He is there");
  } else {
    console.log("He is not there");
  }
}

/************************************
 * todo join method
 ***********************************/
{
  const countries = ["Romania", "Bangladesh", "Brazil", "Spain"];
  const res = countries.join(" and ");
  console.log(res);
}

/************************************
 * todo reverse method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.reverse();
  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7];
  //const newArr = numbers2.concat().reverse();
  const newArr = [...numbers2].reverse();
  console.log(newArr);
  console.log(numbers2);

  const str = "Coding is fun";
  const res = str.split(" ").reverse().join(" ");
  console.log(res);
}

/************************************
 * todo push method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.push(8, 9, 10);
  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7];
  const res = numbers2.push(8, 9, 10);
  console.log(res); // * return length
}

/************************************
 * todo pop method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.pop(8, 9, 10);
  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7];
  const res = numbers2.pop(8, 9, 10);
  console.log(res); // * return length
}

/************************************
 * todo unshift method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.unshift(8, 9, 10);
  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7];
  const res = numbers2.unshift(8, 9, 10);
  console.log(res); // * return length
}

/************************************
 * todo shift method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  numbers.shift();
  numbers.shift();
  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6, 7];
  const res = numbers2.shift();
  console.log(res); // * return length
}

/************************************
 * todo indexOf method
 ***********************************/
{
  const names = ["Tanvir", "Florin", "Shakib", "Virat"];
  //const res = names.indexOf('Shakib');
  const res = names.indexOf("Florin");
  names[res] = "Shihab";
  console.log(names);

  console.log(res);
}

/************************************
 * todo every method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6];
  const res = numbers.every((item, index, arr) => {
    return item > 0;
  });
  console.log(res);

  const person = [
    {
      name: "Tanvir",
    },
    {
      name: "Israk",
    },
    {
      name: "Florin",
    },
    {
      surname: "Shakib",
    },
  ];

  const resPerson = person.every((element) => {
    return element.name !== undefined;
  });

  console.log(resPerson);
}

/************************************
 * todo some method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6];
  const res = numbers.some((items, index, arr) => {
    return items > 5;
  });
  console.log(res);

  const person = [
    {
      name: "Tanvir",
      age: 13,
    },
    {
      name: "Israk",
      age: 17,
    },
    {
      name: "Florin",
      age: 15,
    },
    {
      surname: "Shakib",
      age: 25,
    },
  ];

  const res2 = person.some((items) => items.age > 18);
  console.log(res2);
}

/************************************
 * todo find method
 ***********************************/
{
  const names = ["Florin", "John", "Mikel"];
  const res = names.find((item) => item === "John");
  console.log(res);

  const person = [
    {
      name: "Tanvir",
      age: 13,
    },
    {
      name: "Israk",
      age: 17,
    },
    {
      name: "Florin",
      age: 15,
    },
    {
      surname: "Shakib",
      age: 25,
    },
  ];

  const res2 = person.find((item) => item.name === "Israk").age;
  console.log(res2);
}

/************************************
 * todo findIndex method
 ***********************************/
{
  const numbers = [1, 2, 3, 4, 5, 6];
  const res = numbers.findIndex((value) => value === 3);
  console.log(res);
}

/************************************
 * todo Array.from  method
 ***********************************/
{
  const str = "123456789";
  const res1 = Array.from(str);
  console.log(res1);

  const res2 = Array.from(str, mapFn);
  function mapFn(x) {
    return Number(x);
  }
  console.log(res2);

  const res3 = Array.from(str, (x) => Number(x));
  console.log(res3);

  const res4 = Array.from(str, Number);
  console.log(res4);

  // * Remove duplicate number
  const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 5, 4, 6];
  const res5 = Array.from(new Set(numbers));
  console.log(res5);
}

/************************************
 * todo isArray method
 ***********************************/
{
  const names = ["Florin", "Ivan", "Liam"];
  const str = "Hello World";
  const number = 17;

  console.log(Array.isArray(names));
  console.log(Array.isArray(str));
  console.log(Array.isArray(number));
}

/************************************
 * todo flat method
 ***********************************/
{
  const arr = [1, [2, [3, [4]]]];

  const res = arr.flat(3);
  const res2 = arr.flat(Infinity);
  console.log(res);
}
