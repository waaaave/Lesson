var empty_object = {};

var stooge = {
    "first-name":"Jerome",
    "last-name":"Howard"
};

var flight = {
    airline:"Oceanic",
    number:815,
    departure:{
        IATA:"SYD",
        time:"2004-09-22 14:55",
        city:"Sydney"
    },
    arrival:{
        IATA:"LXA",
        time:"2004-09-23 10:42",
        city:"Los Angles"
    }
};

console.log(stooge["first-name"]);
console.log(flight.departure.IATA);
console.log(stooge["middle-name"]);
console.log(flight.status);


var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

console.log(flight.equipment);
// console.log(flight.equipment.model);
console.log(flight.equipment && flight.equipment.model);

stooge["first-name"] = 'wave';
stooge["midddle-name"] = 'Lesster';
stooge.nickname = 'Curly'
flight.equipment = {
    model:'Boeing 777'
};
flight.status = 'overdue';

if (typeof Object.beget !== 'function') {
    Object.beget = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    }
}

var another_stooge = Object.beget(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
console.log(another_stooge);

stooge.profession = 'actor';
console.log(another_stooge.profession);


for (const name in another_stooge){
    if (typeof another_stooge[name] !== 'function'){
        console.log(name + ':' + another_stooge[name]);
    }
}

var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (let i = 0; i < properties.length; i++) {
    console.log(properties[i] + ':'+another_stooge[properties[i]]);
}


delete another_stooge.nickname
console.log(another_stooge.nickname);

var MYAPP = {};

MYAPP.stooge={
    "first-name":"Jerome",
    "last-name":"Howard"
};
MYAPP.flight = {
    airline:"Oceanic",
    number:815,
    departure:{
        IATA:"SYD",
        time:"2004-09-22 14:55",
        city:"Sydney"
    },
    arrival:{
        IATA:"LXA",
        time:"2004-09-23 10:42",
        city:"Los Angles"
    }
}