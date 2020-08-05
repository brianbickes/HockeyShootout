//Stats for the user and the goalie. For right now, only have power go against save. User will always win.
const user = { name: 'Connor McDavid', power: 70, points: 0 };
const goalie = [
    { name: 'Craig Anderson', save: 65, points: 0 },
    { name: 'Marc-Andre Fleury', save: 70, points: 0 },
    { name: 'John Gibson', save: 75, points: 0 },
    { name: 'Pekka Rinne', save: 78, points: 0 },
];
//buttons for start and shoot mechanics
const $start = $('#start');
const $shoot = $('#shoot');
$start.on("click", function () { onLoad() });
$shoot.on("click", function () { shootOut() });

const list = ["You scored! Great job!", "Off the goalie's glove and in! You scored!", "You went five-hole and scored!", "You beat the goalie clean! Nice shot.", "Wow! The goalie didn't even see that"]
function randomList(list) {
    return list[Math.floor(Math.random() * list.length)]
};

const round = [1, 2, 3, 4];

const $div = $("#textBox");
const $h3 = $('#text');
$div.append($h3);

// console.log(user);
// console.log(goalie);
$h3.text('Click Start to begin the game.')
//Beginning of the game. Player will be directed here and will make a choice of whether or not to enter the shootout. 
const onLoad = () => {
    $h3.text('Hello there! Your number has been called and you are set to face off against a series of goalies in the shootout. Click shoot when you are ready.');
};
//User prompt for the start of the shootout. 
userChoice = () => {
    const choice = prompt(`Coach has asked you to step in. The goalie you are facing is ${goalie[0].name}. Are you ready?`, 'Y');
    if (choice.toLowerCase().trim() === 'y' || 'yes' || 'Yes' || 'Y') {
        alert('Click shoot to take your shot');
    } else {
        alert('Click restart game whenever you are ready to try again.')
    }
};

checkWin = () => {
    if (goalie.length === 0) {
        userWin();
    } else {
        shootOut();
    }
}

const userWin = () => {
    $h3.text('You won the shootout! Celebrate with your teammates!!!!! CLick Restart if you would like to play again.');
    $h3.text('Click the "Restart Game" button to play again.');
};

const goalieWin = () => {
    $h3.text('You lost! Everyone was counting on you but you can redeem yourself. Click Restart to try again.');
};

//Shootout function to determine who gets points. 
const shootOut = () => {
    if (user.power + Math.floor(Math.random() * 30) > goalie[0].save + Math.floor(Math.random() * 15)) {
        user.points++;
        $h3.text(randomList(list));
    } if (user.power + Math.floor(Math.random() * 30) < goalie[0].save + Math.floor(Math.random() * 15)) {
        goalie[0].points++;
        $h3.text(`Ouch! ${goalie[0].name} just robbed you. Get ready to take another shot.`);
    };
    // if (user.points < 4 && goalie[0].points < 4) {
    //     $h3.text('click shoot to take your next shot');
    // } 
    if (user.points === 4 && goalie[0].points < 4 && goalie.length !== 0) {
        const choice = prompt(`You beat ${goalie[0].name}! Would you like to keep playing? The next goalie is much better.`, 'Yes');
        if (choice === 'Yes') {
            //shifts goalie to the next in the array. Next goalie is more difficult than the previous.
            goalie.shift();
            round.shift();
            user.points = 0;
        } else {
            alert("That's ok. Take a rest and click the shoot button when you are ready.")
        }
    } if (user.points === 4 && goalie[0].points < 4 && goalie.length === 0) {
        userWin();
    } if (user.points < 4 && goalie[0].points === 4) {
        goalieWin();
    }

    //Counter that will show up on screen to display current user points, goalie points and current round. 
    const $div = $("#scoreboard");
    const $h2 = $('#pointRound');
    $h2.text(`Goals: ${user.points} Saves: ${goalie[0].points} Current Round: ${round[0]}`);
    $div.append($h2);



};







