'use strict'

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
    if (map.has(player)) {
        const pointPlayer = map.get(player);
        const newPointPlayer = Number(pointPlayer) + Number(points);
        map.set(player, newPointPlayer);
        return `${player} has +${points} points added to his total of ${newPointPlayer}.`;
    } 
    return'No such player found !';
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
    if (map.has(player)) {
        const pointPlayer = map.get(player);
        const newPointPlayer = Number(pointPlayer) - Number(points);
        map.set(player, newPointPlayer);
        return `${player} has -${points} points added to his total of ${newPointPlayer}.`;
    } 
    return'No such player found !';
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
    if (map.has(player)) {
        map.delete(player);
        return `${player} has been removed from the team!`
    }
    return'No such player found !';
}

console.log(deletePlayer(team, 'Ava'));