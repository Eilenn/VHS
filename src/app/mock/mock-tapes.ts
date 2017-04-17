import { Tape } from '../tape';
import { TapeStatus } from '../tape-status';
import { Customer } from "../customer";
import { CUSTOMERS } from "./mock-customers";

export const TAPES:Tape[] = [
    { id: 1, title: 'Apocalypse Now', director: 'Francis Ford Copola', year: 1979,price:1.99,status:TapeStatus.AVAILABLE,rating:5,cover:'./app/covers/apocalypseNow.jpg',gif:'./app/gifs/apocalypseNow.gif'},
    { id: 2, title: 'The Sting', director: 'George Roy Hill', year: 1973,price:0.99,status:TapeStatus.AVAILABLE,rating:4,cover:'./app/covers/theSting.jpg',gif:'./app/gifs/theSting.gif' },
    { id: 3, title: 'Godfather', director: 'Francis Ford Copola', year: 1972,price:0.99,status:TapeStatus.AVAILABLE,rating:3,cover:'./app/covers/godfather.jpg',gif:'./app/gifs/godfather.gif' },
    { id: 4, title: 'One Flew Over the Cuckoo\'s Nest', director: 'Miloš Forman', year: 1975,price:1.99,status:TapeStatus.AVAILABLE,rating:5,cover:'./app/covers/oneFlew.jpg',gif:'./app/gifs/oneFlew.gif' },
    { id: 5, title: 'Back to the Future', director: 'Robert Zemeckis', year: 1985,price:0.99,status:TapeStatus.AVAILABLE,rating:4,cover:'./app/covers/backToTheFuture.jpg',gif:'./app/gifs/backToTheFuture.gif' },
    { id: 6, title: 'Star Wars Episode IV: A New Hope', director: 'George Lucas', year: 1977,price:1.99,status:TapeStatus.AVAILABLE,rating:5,cover:'./app/covers/starWarsIV.jpg',gif: './app/gifs/starWarsIV.gif' },
    { id: 7, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'George Lucas', year: 1980,price:3.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[0],cover:'./app/covers/starWarsV.jpg',gif: './app/gifs/starWarsV.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:3.99},
    { id: 8, title: 'Dead Poets Society', director: 'Peter Weir', year: 1989,price:0.99,status:TapeStatus.RENTED,rating:5,customer:CUSTOMERS[1] ,cover:'./app/covers/deadPoetsSociety.jpg',gif:'./app/gifs/deadPoetsSociety.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:0.99},
    { id: 9, title: 'Alien', director: 'Ridley Scott', year: 1979,price:0.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[2],cover:'./app/covers/alien.jpg',gif:'./app/gifs/alien.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:0.99},
    { id: 10, title: 'Star Wars: Episode VI - Return of the Jedi', director: 'George Lucas', year: 1983,price:3.99,status:TapeStatus.RENTED,rating:5,customer:CUSTOMERS[0],cover:'./app/covers/starWarsVI.jpg',gif:'./app/gifs/starWarsVI.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:3.99},
    { id: 11, title: 'Rocky', director: 'John G. Avildsen', year: 1976 ,price:0.99,status:TapeStatus.RENTED,rating:2,customer: CUSTOMERS[3],cover:'./app/covers/rocky.jpg',gif:'./app/gifs/rocky.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:0.99},
    { id: 12, title: 'Life Of Brian', director: 'Terry Jones', year: 1979,price:1.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[3],cover:'./app/covers/lifeOfBrian.jpg',gif:'./app/gifs/lifeOfBrian.gif',rentDate:new Date('2017-04-10'),returnDate:new Date('2017-04-11'),suggestedFee:1.99 }
];
