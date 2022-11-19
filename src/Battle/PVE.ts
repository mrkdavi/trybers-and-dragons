import Fighter, { SimpleFighter } from '../Fighter';
import calculateWinner from '../utils/calculateWinner';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private fighter: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(fighter);
  }

  fight(): number {
    this.monsters.every((monster) => {
      while (monster.lifePoints > 0) {
        if (this.fighter.lifePoints < 0) return false;
        this.fighter.attack(monster);
        if (monster.lifePoints > 0) {
          monster.attack(this.fighter);
        }
      }
      return true;
    });
    return calculateWinner(this.player.lifePoints);
  }
}