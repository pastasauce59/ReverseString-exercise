function reverse(str){
  // stringToArray = str.split("");
  // console.log(stringToArray);
  reversed = [];
  for (let i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }
  reversedString = reversed.join("");
  console.log(reversedString)
}

string = "Hello World"
reverse(string)