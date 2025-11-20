const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  if (err) return console.log(err);

  fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
    if (err) return console.log(err);

    fs.readFile("./age.txt", "utf-8", (err, age) => {
      if (err) return console.log(err);

      fs.readFile("./hobbies.txt", "utf-8", (err, hobbiesData) => {
        if (err) return console.log(err);

        // Convert hobbies to array 
        const hobbies = hobbiesData.split(",").map(h => h.trim());

        // final sentence
        const sentence = `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`;

        console.log(sentence);
      });
    });
  });
});
