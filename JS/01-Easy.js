function add(x, y) {
  return x + y;
}

console.log(add(1, 2, 3, 4));

var user = { name: "Luis", age: 20 };
delete user.age;
console.log(user);

var user = null;
console.log(typeof user);