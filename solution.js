// Rewrite this if using the conditional operator '?':

let result;
let a = 3;
let b = 6;
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}
console.log(a + b < 4 ? "Below" : "Over");
// console.log(result);

// 2:
let score = 42;
let msg = "";
console.log(
  score > 1337
    ? "This is a new highscore!"
    : "You need more points to beat the highscore!"
);

// 3;

let login = "Director";
console.log(
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "Nothing to say"
);
