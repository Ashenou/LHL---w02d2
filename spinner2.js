// Refactored spinner code

const animator = [
  "|   ",
  "/   ",
  "-   ",
  "\\   ",
  "|   ",
  "/   ",
  "-   ",
  "\\   ",
  "|   ",
];

let counter = 500;
for (const slash of animator) {
  setTimeout(() => process.stdout.write(`\r${slash}`), (counter += 300));
}
