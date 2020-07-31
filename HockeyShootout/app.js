//Stats for the user and the goalie. For right now, only have power go against save. User will always win.

const user = {name: 'Connor McDavid', power: 96, points: 0};
const goalie = {name: 'Craig Anderson', save: 94, points: 0};

// shotType = 
//     {
//         foreHand: 'f'
//     },
//     {
//         backHand: 'h'
//     }
// ];
console.log(user);

const onLoad = () => {
 const choice = prompt(`Hello there ${user.name}! You're shot power is ${user.power}. Type 's' to start.`, 's');
    if (choice.toLowerCase().trim() === 's'){
        shootout(); 
    };
};

shootout = () => {
    
};

onLoad(); 