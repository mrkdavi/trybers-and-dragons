function calculateLife(damageReceived: number, currentLife: number) {
  return currentLife - damageReceived > 0 ? currentLife - damageReceived : -1;
}

export default calculateLife;