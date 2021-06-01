// setTimeout(() => {console.log(`4311o th3r3 w0r1d `)}, 3000);

const words = `4311o th3r3 w0r1d`;

let counter = 1000;
for (const word of words.split(" ")) {
  setTimeout(() => console.log(word), (counter += 1000));
}
