const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "y");
  const nextBirthday = birthday.add();

  console.log(`Idade: ${ageInYears}`);
}

birthday("1995-08-04");
