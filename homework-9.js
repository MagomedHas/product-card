var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers = numbers.slice(4, 9);

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

function reverseMassif(massif) {
  massif.reverse();
}

reverseMassif(furniture);
reverseMassif(numbers);
