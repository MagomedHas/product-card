import { comments } from './comments.js';
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers = numbers.filter((number) => number >= 5);

const furniture = [
  'Стол',
  'Стул',
  'Шкаф',
  'Кровать',
  'Диван',
  'Кресло',
  'Тумбочка',
  'Комод',
  'Стеллаж',
  'Зеркало',
];

furniture.includes('Стол');

function reverseArray(array) {
  array.reverse();
}

reverseArray(numbers);
reverseArray(furniture);

console.log(comments.filter((comment) => comment.email.includes('.com')));
const commentsWithPostId = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

const commentsNamesAndIds = comments.map((comment) => ({
  name: comment.name,
  id: comment.id,
}));

const commentsWithInvalidFlag = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

const commentsMailByReduce = comments.reduce((result, comment) => {
  result.push(comment.email);
  return result;
}, []);

const commentsMailByMap = comments.map((comment) => comment.email);

console.log(commentsMailByMap.toString());
console.log(commentsMailByReduce.join('; s'));
