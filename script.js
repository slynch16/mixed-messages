
const cat = {
    name : ['Mittens', 'Louis', 'Pukey'],
    desire : ['I am hungry.', 'I threw up on your bed.' , 'I want to cuddle.'],
    toDo : ['Give me a treat!', 'Brush my belly!' , 'Get the stain remover!']
    
}

let randomNumber  = (number) => {
    return Math.floor(Math.random() * number);
};

let catNeeds = [];

for (item in cat){
    let index = randomNumber(cat[item].length);

    switch (item){
        case 'name':
        catNeeds.push(`My name is ${cat[item][index]}.`);
        break;
        case 'desire':
        catNeeds.push(`${cat[item][index]}`);
        break;
        case 'toDo':
        catNeeds.push(`${cat[item][index]}`);
        break;
    };
};


    function formatCat (speak){
        const formatted = speak.join(' ');
        console.log(formatted);
    };

    console.log(formatCat(catNeeds));

