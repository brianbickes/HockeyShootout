//Stats for the user and the goalie. For right now, only have power go against save. User will always win.

const user = {name: 'Connor McDavid', power: 80, points: 0};
const goalie = {name: 'Craig Anderson', save: 80, points: 0};

// shotType = 
//     {
//         foreHand: 'f'
//     },
//     {
//         backHand: 'h'
//     }
// ];
console.log(user);


//Beginning of the game. Player will be directed here and will make a choice of whether or not to enter the shootout. 

const onLoad = () => {
 const choice = prompt(`Hello there ${user.name}! You're shot power is ${user.power}. Type 's' to start.`, 's');
    if (choice.toLowerCase().trim() === 's'){
        userChoice(); 
    };
};
//User prompt for the start of the shootout. 
userChoice = () => {
    const choice = prompt(`Coach has asked you to step in. The goalie you are facing is ${goalie.name}. Are you ready?`, 'Y');
        if (choice.toLowerCase().trim() === 'y' || 'yes' || 'Yes' || 'Y'){
                shootOut();
        }else (console.log('NO'));
};

//Shootout function to determine who gets points. 
shootOut = () => {
    if(user.power > goalie.save) {
        user.points ++; 
        alert(`You just scored on ${goalie.name}!. You have ${user.points} goal and ${goalie.name} has made ${goalie.points} saves.`)
    }if(user.power < goalie.save) {
        goalie.points ++; 
        alert(`${goalie.name} just made a save and they have ${goalie.points} and you have ${user.points}`);
    } else  {
        alert('The shot missed! No points are awarded.');
    };
    if(user.points <= 3  && goalie.points <= 3) {
        shootOut();
    } if (user.points === 4 && goalie.points < 4){
        userWin(); 
    } if (user.point < 4 && goalie.points){
        goalieWin(); 
    }
};

userWin = () => {
    alert('You won the shootout! Celebrate with your teammates'); 
}

goalieWin = () => {
    alert('You lost'); 
}

// endGame = () => {
//     if(user )
// }

// while (user.points < 4 && goalie.points < 4) {

// }

onLoad(); 