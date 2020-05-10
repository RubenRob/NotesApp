export interface IGebruiker {
    id: number;
    name: string;
}

export class Gebruiker implements IGebruiker {

    constructor(public id: number, public name: string) {
    }

}