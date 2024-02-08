enemyHealth = 50;
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min +1) + min);
  return value;
}
console.log(randomNumber(40,60));
//43 48 41

enemyHealth = randomNumber(40,60);
console.log(enemyHealth);
//48 54 55


playerAttack = 10;
// generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);
console.log(damage); //10 7 7
enemyHealth = Math.max(0, enemyHealth - damage);
console.log(enemyHealth);//38 47 48