'use strict'

// 1) Створіть Map, де ключами будуть імена гравців, а значеннями - їхня кількість балів. Напишіть функції для додавання балів гравцям, віднімання балів і видалення гравців.
const team = new Map();

team.set('Emily','78');
team.set('Michael','45');
team.set('Olivia','93');
team.set('Daniel','56');
team.set('Sophia','87');
team.set('James','62');
team.set('Ava','74');
team.set('Benjamin','39');

/**
 * 
 * @param {team} map 
 * @param {string} player 
 * @param {number} points 
 * @returns string
 */
function addPoints(map, player, points) {
    if (!map.has(player)) {
        return'No such player found !';
    } 
    const newPointPlayer = Number(map.get(player)) + Number(points);
    map.set(player, newPointPlayer);
    return `${player} has +${points} points added to his total of ${newPointPlayer}.`;
}

console.log(addPoints(team, 'Daniel', 4));
console.log(addPoints(team, 'Asse', 8));

/**
 * 
 * @param {team} map 
 * @param {string} player 
 * @param {number} points 
 * @returns string
 */
function subtractPoints(map, player, points) {
    if (!map.has(player)) {
        return'No such player found !';
    }
    const newPointPlayer = Number(map.get(player)) - Number(points);
    map.set(player, newPointPlayer);
    return `${player} has -${points} points added to his total of ${newPointPlayer}.`;
}

console.log(subtractPoints(team, 'Benjamin', 9));
console.log(subtractPoints(team, 'Asese', 8));

/**
 * 
 * @param {team} map 
 * @param {string} player 
 * @returns string
 */
function deletePlayer(map, player) {
    if (map.delete(player)) {
        return `${player} has been removed from the team!`
    }
    return'No such player found !';
}

console.log(deletePlayer(team, 'Ava'));

// 2) За допомогою деструктуризації дістати з об'єкту слідуючі данні і покласти їх у змінні з відповідними іменами:
// university, city, latitude, пошту з назвою userEmail, друге хобі з назвою secondHobbie, ім'я першої дитини з назвою firstChildName

let user = {    
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "Anytown",
        country: "USA",
        postalCode: "12345",
        state: "California",
        coordinates: {
            latitude: 37.7749,
            longitude: -122.4194
        }
    },
    contacts: {
        email: "john.doe@example.com",
        phone: "123-456-7890",
        social: {
            facebook: "john.doe.123",
            twitter: "@johndoe",
            instagram: "@johndoe123"
        }
    },
    hobbies: ["reading", "traveling", "hiking"],
    education: {
        degree: "Bachelor's",
        field: "Computer Science",
        university: "University of California, Berkeley"
    },
    work: {
        company: "ABC Corp",
        position: "Software Engineer",
        experience: "5 years"
    },
    family: {
        spouse: {
            firstName: "Jane",
            lastName: "Doe",
            age: 28
        },
        children: [
            { name: "Emily", age: 5 },
            { name: "Michael", age: 3 }
        ]
    }
};
const {
education:{
    university
},
address: {
    city,
    coordinates: {
        latitude,
    }
},
contacts:{
    email
},
hobbies:[,secondHobi],
family: {
    children
}
} = user;


const universityUser = university;
const cityUser = city;
const latitudeUser = latitude;
const userEmail = email;
const secondHobbie = secondHobi;
const firstChildName = children[0].name;

console.log(universityUser);
console.log(cityUser);
console.log(latitudeUser);
console.log(userEmail);
console.log(secondHobbie);
console.log(firstChildName);