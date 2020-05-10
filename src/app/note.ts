export interface INotitie {
      id: number;
      content: string;
      userId: number;
      categoryId: number;
}

export class Notitie implements INotitie {

  constructor(public id: number, 
      public content: string,
      public userId: number,
      public categoryId: number) {
  }

}