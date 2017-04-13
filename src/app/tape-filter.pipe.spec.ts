import { TapeFilterPipe } from "./tape-filter.pipe";
import { TapeStatus } from "./tape-status";
import { CUSTOMERS } from "./mock-customers";
import { Tape } from "./tape";

describe('TapeFilterPipe test', () => {
    let pipe: TapeFilterPipe;
    let TAPES:Tape[];
    beforeEach(()=>{
        pipe=new TapeFilterPipe();
        TAPES = [
    { id: 1, title: 'Apocalypse Now', director: 'Francis Ford Copola', year: 1979,price:1.99,status:TapeStatus.AVAILABLE,rating:5,cover:'./app/covers/apocalypseNow.jpg',gif:'./app/gifs/apocalypseNow.gif'},
    { id: 6, title: 'Star Wars Episode IV: A New Hope', director: 'George Lucas', year: 1977,price:1.99,status:TapeStatus.AVAILABLE,rating:5,cover:'./app/covers/starWarsIV.jpg',gif: './app/gifs/starWarsIV.gif' },
    { id: 7, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'George Lucas', year: 1980,price:3.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[0],cover:'./app/covers/starWarsV.jpg',gif: './app/gifs/starWarsV.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:3.99},
    { id: 9, title: 'Alien', director: 'Ridley Scott', year: 1979,price:0.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[2],cover:'./app/covers/alien.jpg',gif:'./app/gifs/alien.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:0.99},
];
    });
    it('filters TAPES when search term is alien',()=>{
        let filter='Alien';
        let expectedResult=new Array<Tape>();
        expectedResult.push(TAPES[3]);
        expect(pipe.transform(TAPES,filter)).toEqual(expectedResult);
    });
        it('filters TAPES when search term is star',()=>{
        let filter='star';
        let numberOfResults=2;
        expect(pipe.transform(TAPES,filter).length).toBe(numberOfResults);
    });
            it('filters TAPES when no search term',()=>{
        let filter='';
        let numberOfResults=4;
        expect(pipe.transform(TAPES,filter).length).toBe(numberOfResults);
    });
    it('filters TAPES when no results',()=>{
        let filter='pulp';
        let numberOfResults=0;
        expect(pipe.transform(TAPES,filter).length).toBe(numberOfResults);
    });                
})
