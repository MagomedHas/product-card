import { comments } from './comments.js';
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

function reversedArray(array) {
  array.reverse();
}

reversedArray(numbers);
reversedArray(furniture);

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

const commentsMail1 = comments.reduce((result, comment) => {
  result.push(comment.email);
  return result;
});

const commentsMail2 = comments.map((comment) => comment.email);

console.log(commentsMail1.toString());
console.log(commentsMail2.join('; s'));
