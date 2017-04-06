import { TapeStatus } from './tape-status';
import { Customer } from "./customer";
export interface ITape {
   
        id: number;
        title: string;
        director: string;
        year: number;
        price:number;
        status:TapeStatus;
        customer?: Customer;
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
        public status:TapeStatus,
        public renter?: string,
        public customer?: Customer,
        public rating?:number,
        public country?:string,
        public category?: string) {
    }
}