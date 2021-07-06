function GetBestStudent(object) {
  let averages = [];
  let max = 0;
  let bestScore;
  for (const key in object) {
    bestScore =
      object[key].reduce((acc, item) => acc + item) / object[key].length;
    if (bestScore > max) {
      max = bestScore;
    }
  }
  return max;
}
console.log(
  GetBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
