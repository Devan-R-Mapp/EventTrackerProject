export class Lightsaber {

  id: number | null;
  owner: string | null;
  color: string | null;
  length: number | null;
  alignment: string | null;
  destroyed: boolean | null;
  battles: number | null;
  wins: number | null;



  constructor(
    id: number | null = 0,
    owner: string | null = '',
    color: string | null = '',
    length: number | null = 0,
    alignment: string | null = '',
    destroyed: boolean | null = false,
    battles: number | null = 0,
    wins: number | null = 0
  ) {
    this.id = id;
    this.owner = owner;
    this.color = color;
    this.length = length;
    this.alignment = alignment
    this.destroyed = destroyed;
    this.battles = battles;
    this.wins = wins;

  }
}
