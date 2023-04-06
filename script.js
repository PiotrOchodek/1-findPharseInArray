const words = [
  'house',
  'car',
  'dog',
  'cat',
  'chair',
  'tv',
  'radio',
  'bike',
  'fridge',
  'ball',
  'computer',
  'umbrella',
  'fish',
  'sofa',
  'horse',
  'computer',
];
const findTheWordFilter = (arr, wordToFind) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.toLowerCase().includes(wordToFind.toLowerCase())) {
      result.push([i, item]);
    }
  }
  console.log(result); // for practice, to be removed
  return result;
};
findTheWordFilter(words, 'co');

