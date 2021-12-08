//Ptoject (Sleep Debt Calculator)

// This project calculates the sleep debt of a user
// assigning sleep hours for each of the days
const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 4;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 6;
      break;
    case "Friday":
      return 9;
      break;
    case "Saturday":
      return 8;
      break;
    case "Sunday":
      return 10;
      break;
    default:
      return "Error";
  }
};
console.log(getSleepHours("Friday"));
console.log(getSleepHours("Wednesday"));
console.log(getSleepHours("Sunday"));

// creating a function to calculate actual sleep hours
const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

console.log(getSleepHours("Monday"));
console.log(getActualSleepHours());

// creating a function to calculate ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
};
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

// creating the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep this week!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) more sleep than needed this week!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than needed this week. Get some rest!"
    );
  } else {
    console.log("Get a balanced rest");
  }
};
calculateSleepDebt();
