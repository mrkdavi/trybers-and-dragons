import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';
import calculateDamage from './utils/calculateDamage';
import calculateLife from './utils/calculateLife';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _maxLifePoints: number;
  private _dexterity: number;
  readonly archetype: Archetype;
  readonly race: Race;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    const damage = (enemy?.defense || 0) + this._strength + getRandomInt(0, 10);
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    const lifeIncrease = getRandomInt(1, 10);
    const newLife = this._maxLifePoints + lifeIncrease < this.race.maxLifePoints
      ? this._maxLifePoints + lifeIncrease
      : this.race.maxLifePoints;
    this._maxLifePoints = newLife;
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damageReceived = calculateDamage(attackPoints);
    this._lifePoints = calculateLife(damageReceived, this._lifePoints);
    return this._lifePoints;
  }
}