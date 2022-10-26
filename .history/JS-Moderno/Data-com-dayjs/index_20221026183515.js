const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "y");
  const nextBirthday = birthday.add(ageInYears + 1, "y");
  console.log(`Próximo aniversário em: ${nextBirthday}.format("DD/MM/YYYY")`);

  console.log(`Idade: ${ageInYears}`);
}

birthday("1995-08-04");
