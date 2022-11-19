import { SimpleFighter } from './Fighter';
import calculateDamage from './utils/calculateDamage';
import calculateLife from './utils/calculateLife';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const damageReceived = calculateDamage(attackPoints);
    this._lifePoints = calculateLife(damageReceived, this._lifePoints);
    return this._lifePoints;
  }
}