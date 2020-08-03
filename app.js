//Stats for the user and the goalie. For right now, only have power go against save. User will always win.
const user = { name: 'Connor McDavid', power: 100, points: 0 };
const goalie = [
    { name: 'Craig Anderson', save: 70, points: 0 },
    { name: 'Marc-Andre Fleury', save: 75, points: 0 },
    { name: 'John Gibson', save: 80, points: 0 },
    { name: 'Pekka Rinne', save: 85, points: 0 },
];
console.log(user);
console.log(goalie)
//Beginning of the game. Player will be directed here and will make a choice of whether or not to enter the shootout. 

const onLoad = () => {
    const choice = prompt(`Hello there ${user.name}! Your shot power is ${user.power}. Type 's' to start.`, 's');
    if (choice.toLowerCase().trim() === 's') {
        userChoice();
    };
};
//User prompt for the start of the shootout. 
userChoice = () => {
    const choice = prompt(`Coach has asked you to step in. The goalie you are facing is ${goalie.name}. Are you ready?`, 'Y');
    if (choice.toLowerCase().trim() === 'y' || 'yes' || 'Yes' || 'Y') {
        shootOut();
    } else (console.log('NO'));
};

checkWin = () => {
    if (goalie.length === 0) {
        userWin();
    } else {
        shootOut();
    }
}
//Shootout function to determine who gets points. 
const shootOut = () => {
    if (user.power + Math.floor(Math.random() * 20) > goalie[0].save + Math.floor(Math.random() * 15)) {
        user.points++;
        alert(`You just scored on ${goalie[0].name}!. You have ${user.points} goal and ${goalie[0].name} has made ${goalie[0].points} saves.`)
    } if (user.power + Math.floor(Math.random() * 20) < goalie[0].save + Math.floor(Math.random() * 15)) {
        goalie[0].points++;
        alert(`${goalie[0].name} just made a save and they have ${goalie[0].points} and you have ${user.points}`);
    };
    if (user.points < 4 && goalie[0].points < 4) {
        shootOut();
    } if (user.points === 4 && goalie[0].points < 4 && goalie.length !== 0) {
        checkWin();
        const choice = prompt(`You beat ${goalie[0].name}! Would you like to keep playing? The next goalie is much better.`, 'Yes');
        if (choice === 'Yes') {
            //shifts goalie to the next in the array. Next goalie is more difficult than the previous.
            goalie.shift();
            user.points = 0;
            checkWin();
        }
    } if (user.points === 4 && goalie.points < 4 && goalie.length === 0) {
        userWin();
    } if (user.point < 4 && goalie.points === 4) {
        goalieWin();
    }
};
// const $div = $("<div>").attr("id", "userPoints")
// $div.html(`<h2>${user.points}</h2>`)
// $('body').append($div);

const userWin = () => {
    alert('You won the shootout! Celebrate with your teammates');
    const choice = prompt("Would you like to play again?", "Yes or No?");
    if (choice.toLowerCase().trim() === 'y' || 'yes' || 'Yes' || 'Y') {
        user.points = 0;
        goalie.unshift();
        goalie.unshift();
        goalie.unshift();
        goalie.unshift();
        goalie[0].points = 0;
        goalie[1].points = 0;
        goalie[2].points = 0;
        goalie[3].points = 0;
        onLoad();
    } 
};

const goalieWin = () => {
    alert('You lost');
};

