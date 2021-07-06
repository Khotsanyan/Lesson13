function DayOfYear(month, day, year) {
  arrayMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  for (let i = 0; i < month - 1; i++) {
    const element = arrayMonths[i];
    sum += element;
  }
  if (
    month > 2 &&
    ((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
      (year % 4 === 0 && year % 100 !== 0))
  ) {
    return sum + day + 1;
  }
  return sum + day;
}
console.log(foo(3, 9, 2020));
