// Prints each char in animation

const sentence = "hello there from lighthouse labs";

let counter = 1000;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), counter += 50);
}
console.log();
