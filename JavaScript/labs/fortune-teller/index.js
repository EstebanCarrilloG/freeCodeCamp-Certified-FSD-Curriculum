let fortune1, fortune2, fortune3, fortune4, fortune5;

fortune1 = "Your cat will look very cuddly today.";
fortune2 = "The weather will be nice tomorrow.";
fortune3 = "Be cautious of your new neighbors.";
fortune4 = "You will find a new hobby soon.";
fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.floor(Math.random() * 6);

let selectedFortune =
  randomNumber === 1
    ? fortune1
    : randomNumber === 2
    ? fortune2
    : randomNumber === 3
    ? fortune3
    : randomNumber === 4
    ? fortune4
    : randomNumber === 5
    ? fortune5
    : 0;

console.log(selectedFortune);
