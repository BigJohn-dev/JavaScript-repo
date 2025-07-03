
function refresh(word) {
  let max = "";
  let current = "";

  for (let index = 0; index < word.length; index++) {
    if (word[index] === "") {      if (current.length > max.length) {
        max = current[index];
      }
    current = "";
  }
}
  return max;
}


let word = "Ade is going to Semicolon";
console.log(refresh(word));