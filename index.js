const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((tutorial) => {
    let words = tutorial.split(' ');
    let titles = words.map((word) => word[0].toUpperCase()+word.slice(1));
    return titles.join(' ');
    console.log(titles);

  })
}

//after capitalized first letter of each word, I want to concantenate the rest of the word
//Afer that, join the entire array of words 
//return words.map