function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }

  return result;
}

function zipListTheFunctionalWay(
  list1: (string | number)[],
  list2: (string | number)[],
): (string | number)[] {
  const result: (string | number)[] = [];

  list1.forEach((item, index) => {
    result.push(item, list2[index]);
  });

  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
