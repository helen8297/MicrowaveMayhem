//It is lunchtime at the School of Code. Your lunch needs to be microwaved.
//Will you survive the microwave queue?
//You are at the end of the lunch queue. Everyone in the queue will need 2 minutes
//to microwave their lunch.
//In an array, you will be told the number of people in the queue in front of you,
//How long your lunch will take to cook (mins), and the number of minutes until you
//pass out from hunger. Write a function to work out if you can survive the queue.
//Return "I will survive!" if you will, otherwise, return "I am too hungry to survive."

function microwaveMayhem(peopleInQueue, yourLunchTime, minutesLeftToSurvive) {
  let time = peopleInQueue * 2 + yourLunchTime;

  if (minutesLeftToSurvive >= time) {
    return "I will survive!";
  } else return "I am too hungry to survive!";
}

module.exports = {
  microwaveMayhem
};
