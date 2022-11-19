function calculateDamage(attackReceived: number, defense = 0) {
  return attackReceived - defense > 0 ? attackReceived - defense : 1;
}

export default calculateDamage;