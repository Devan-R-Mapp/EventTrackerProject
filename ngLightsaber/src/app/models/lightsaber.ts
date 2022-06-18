export class Lightsaber {

  id: number | null;
  owner: string | null;



  constructor(
    id: number | null = 0,
    owner: string | null = ''
  ) {
    this.id = id;
    this.owner = owner;

  }
}
