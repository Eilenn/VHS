export class Tape {
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public year: number,
        public status?:string,
        public country?:string,
        public category?: string) {
    }
}