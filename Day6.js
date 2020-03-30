const square_num = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;

console.log(square_num([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(square_num([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));