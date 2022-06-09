//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1

console.log(`----01-Method-1----`);
function uppercase(str) {
  //write your code here

  const MyString = str.toLowerCase().split(" ");
  const MyStringUpper = [];
  for (const item of MyString) {
    MyStringUpper.push(item[0].toUpperCase() + item.slice(1));
  }
  return MyStringUpper.join(" ");
}

console.log(uppercase("the quick brown fox"));

console.log(`----01-Method-2----`);
function uppercase2(str) {
  //write your code here

  const MyString = str.toLowerCase().split(" ");
  const MyStringUpper = [];

  for (let i = 0; i< MyString.length; i++) {
    MyStringUpper.push(MyString[i].charAt(0).toUpperCase() + MyString[i].slice(1));
  }
  // for (const item of MyString) {
  //   MyStringUpper.push(item[0].toUpperCase() + item.slice(1));
  // }
  return MyStringUpper.join(" ");
}

console.log(uppercase2("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

console.log(`----02----`);
function find_longest_word(str) {
  //write your code here

  const MyString = str.split(" ");

  let longestWord = 0;
  let word = "";

  for (let i = 0; i < MyString.length; i++) {
    if (longestWord < MyString[i].length) {
      longestWord = MyString[i].length;
      word = MyString[i];
    }
  }

  return word;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

console.log(`----03----`);
function Longest_Country_Name(country_name) {
  //write your code here

  let longestCoName = 0;
  let longestCountryName = "";

  for (let i = 0; i < country_name.length; i++) {
    if (longestCoName < country_name[i].length) {
      longestCoName = country_name[i].length;
      longestCountryName = country_name[i];
    }
  }

  return longestCountryName;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
