export interface ITape {
   
        id: number;
        title: string;
        director: string;
        year: number;
        price:number;
        status?:string;
        rating?:number;
        country?:string;
        category?: string;
    
}

export class Tape implements ITape{
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public year: number,
        public price:number,
        public status?:string,
        public rating?:number,
        public country?:string,
        public category?: string) {
    }
}