export interface Icategorie {
      id: number;
      description: string;
      color: string;
      userId: number;
}

export class Categorie implements Icategorie {

    constructor(public id: number, 
        public description: string,
        public color: string,
        public userId: number) {
    }

}