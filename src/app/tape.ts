import { TapeStatus } from './tape-status';
import { Customer } from "./customer";
export interface ITape {
   
        id: number;
        title: string;
        director: string;
        year: number;
        price:number;
        status?:TapeStatus;
        customer?: Customer;
        rentDate?: Date;
        returnDate?: Date;
        suggestedFee?: number;
        rating?:number;
        country?:string;
        category?: string;
        cover?:string;
        gif?: string;
}

export class Tape implements ITape{
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public year: number,
        public price:number,
        public status?:TapeStatus,
        public customer?: Customer,
        public rentDate?: Date,
        public returnDate?: Date,
        public suggestedFee?: number,
        public rating?:number,
        public country?:string,
        public category?: string,
        public cover?:string,
        public gif?:string) {
    }
}