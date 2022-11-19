import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

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

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    const damage = enemy.defense + this._strength + getRandomInt(0, 10);
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
    const damage = attackPoints - this._defense > 0
      ? attackPoints - this._defense
      : 1;
    this._lifePoints = this._lifePoints - damage > 0
      ? this._lifePoints - damage
      : -1;
    return this._lifePoints;
  }
}