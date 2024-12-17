//Задание 1 
const originalArray = [1, 2, 3, 4, 5];
document.getElementById("originalArray").textContent = JSON.stringify(originalArray);
const modifiedArray = originalArray.map(item => (item + 10) * 3);
document.getElementById("modifiedArray").textContent = JSON.stringify(modifiedArray);

//Задание 2
const birthYears = [1990, 2006, 2002, 2018, 2005];
const currentYear = new Date().getFullYear();

document.getElementById("birthYears").textContent = JSON.stringify(birthYears);
const ages = birthYears.map(year => currentYear - year);
document.getElementById("ages").textContent = JSON.stringify(ages);

//Задание 3
const persons = [
    { name: 'Аня', age: 16 },
    { name: 'Сава', age: 18 },
    { name: 'Настя', age: 27 },
    { name: 'Даша', age: 14 },
    { name: 'Саша', age: 24 },
  ];
  
  function formatArray(arr) {
    return arr.map(item => `${Object.values(item).join(', ')}`).join(', ');
  }
  document.getElementById("allPersons").textContent = formatArray(persons);
  const adultPersons = persons.filter(person => person.age >= 18);
  document.getElementById("adultPersons").textContent = formatArray(adultPersons);

  // Задание 4
const studentScores = [4, 3, 5, 3, 4, 4, 5];
document.getElementById("studentScores").textContent = JSON.stringify(studentScores);
const sum = studentScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const averageScore = sum / studentScores.length;
document.getElementById("averageScore").textContent = averageScore;
  
//Задание 5
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C', 'C++', 'Go'];

document.getElementById('strArray').textContent = JSON.stringify(strArray);

function mapForEach(arr, fn) {
  return arr.map(fn); 
}
const transformedArray = mapForEach(strArray, item => item.length <= 3 ? 0 : 1);
document.getElementById("transformedArray").textContent = JSON.stringify(transformedArray);

//Дополнительное задание
 
function simulate(n) {
  const colors = ['красный', 'черный', 'белый'];
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push(colors[Math.floor(Math.random() * 3)]);
  }
  return results;
}

function findShortestSequence(arr) {
  let shortestSeq = { color: '', length: Infinity };
  let currentSeq = { color: '', length: 0 };

  for (let i = 0; i < arr.length; i++) {
    if (currentSeq.color === '' || arr[i] === currentSeq.color) {
      currentSeq.color = arr[i];
      currentSeq.length++;
    } else {
      if (currentSeq.length < shortestSeq.length) {
        shortestSeq = { ...currentSeq };
      }
      currentSeq = { color: arr[i], length: 1 };
    }
  }
  if (currentSeq.length < shortestSeq.length) {
    shortestSeq = { ...currentSeq };
  }
  return shortestSeq;
}

function task6() {
  const simulationResults = simulate(1000000);
  const shortest = findShortestSequence(simulationResults);
  document.getElementById("task6Output").textContent = `Самая короткая последовательность: ${shortest.length} ${shortest.color}`;
}