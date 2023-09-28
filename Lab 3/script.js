console.log(`Commands: pitch(), search(), tend(), roast(), sleep(), help()`);
const game = {
    wood: 0,
    marshmallows: 3,
    fire: false,
    tent: false
};

function help() {
    return "Commands: pitch(), search(), tend(), roast(), sleep(), help()";
}
function pitch() {
    if (!game.tent) {
        game.tent = true;
        return "you pitched the tend.";
    }
}
function search() {
    if (!game.fire) {
        game.wood+= 1;
        return "You found a piece of wood.";
    } else {
        return "You cannot search for wood while the fire is burning";
    }
}

function tend() {
    if (!game.fire) {
        if (game.wood > 0) {
            game.fire = true;
            game.wood-= 1;
            return "You started a fire.";
        } else {
            return "You need wood to start a fire";
        }
    } else {
        game.fire = false;
        return "You put out the fire.";
    }
}
function roast() {
    if (game.fire) {
        if (game.marshmallows > 0) {
            game.marshmallows-= 1;
            return "You roasted a marshmallow.";
        } else {
            return "You are out of marshmallows.";
        }
    }
}

function sleep() {
    if (game.tent && !game.fire) {
        game.wood = 0;
        game.marshmallows = 3;
        game.fire = false;
        game.tent = true;
         return "You went to sleep";
    } else if (!game.fire) {
        return "You need to put out the fire.";
    } else {
        return "you need to put out the fire";
    }
    
}
