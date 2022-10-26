const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "y");
  const nextBirthday = birthday.add(ageInYears + 3, "y");
  const daysToNextBirthday = nextBirthday.diff(today, "d");
  console.log(`30 anos em: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Idade: ${ageInYears}`);
  console.log(
    `Dias pra completar ${ageInYears + 3} anos: ${daysToNextBirthday}`
  );
}
birthday("1995-04-08");
