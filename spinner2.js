const characters = ["|", "/", "-", "\\", "|"];

for (let i = 0; i < 2; i++) {
  for (let j = i; j < characters.length; j++) {
    setTimeout(() => {
      process.stdout.write(`\r${characters[j]}  `);
    }, 100 + 200 * (i * (characters.length - i) + j));

    if (i === 1 && j === characters.length - 1) {
      setTimeout(() => {
        process.stdout.write("\n");
      }, 100 + 200 * (i * (characters.length - i) + j + 1));
    }
  }
}
