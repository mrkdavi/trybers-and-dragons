export default abstract class Race {
  constructor(
    public readonly name: string,
    public readonly dexterity: number,
  ) {}

  abstract get maxLifePoints(): number;
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}