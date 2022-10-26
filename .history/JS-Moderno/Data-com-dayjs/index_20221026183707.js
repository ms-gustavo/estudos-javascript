const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "y");
  const nextBirthday = birthday.add(ageInYears + 1, "y");
  const daysToNextBirthday = nextBirthday.diff(today, "d");
  console.log(`Próximo aniversário em: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Idade: ${ageInYears}`);
  console.log(
    `Dias pra completar ${ageInYears + 1} anos: ${daysToNextBirthday}`
  );
}

birthday("1995-04-08");
