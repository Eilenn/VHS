import { Tape } from './tape';
import { TapeStatus } from './tape-status';
import { Customer } from "./customer";
import { CUSTOMERS } from "./mock-customers";

let customer=new Customer('John', 'Wick');
let customer2=new Customer('Wade', 'Wilson');

export const TAPES: Tape[] = [
    { id: 1, title: 'Apocalypse Now', director: 'Francis Ford Copola', year: 1979,price:2.99,status:TapeStatus.AVAILABLE,rating:5},
    { id: 2, title: 'The Sting', director: 'George Roy Hill', year: 1973,price:2.99,status:TapeStatus.AVAILABLE,rating:4 },
    { id: 3, title: 'Godfather', director: 'Francis Ford Copola', year: 1972,price:1.99,status:TapeStatus.AVAILABLE,rating:3 },
    { id: 4, title: 'One Flew Over the Cuckoo\'s Nest', director: 'Miloš Forman', year: 1975,price:2.99,status:TapeStatus.AVAILABLE,rating:5 },
    { id: 5, title: 'Back to the Future', director: 'Robert Zemeckis', year: 1985,price:2.99,status:TapeStatus.AVAILABLE,rating:4 },
    { id: 6, title: 'Star Wars Episode IV: A New Hope', director: 'George Lucas', year: 1977,price:3.99,status:TapeStatus.AVAILABLE,rating:5 },
    { id: 7, title: 'Star Wars: Episode V - The Empire Strikes Back', director: 'George Lucas', year: 1980,price:3.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[0]},
    { id: 8, title: 'Dead Poets Society', director: 'Peter Weir', year: 1989,price:2.99,status:TapeStatus.RENTED,rating:5,customer:CUSTOMERS[1] },
    { id: 9, title: 'Alien', director: 'Ridley Scott', year: 1979,price:2.99,status:TapeStatus.RENTED,rating:5,customer: CUSTOMERS[2] },
    { id: 10, title: 'Star Wars: Episode VI - Return of the Jedi', director: 'George Lucas', year: 1983,price:3.99,status:TapeStatus.RENTED,rating:5,customer:CUSTOMERS[0]},
    { id: 11, title: 'Rocky', director: 'John G. Avildsen', year: 1976 ,price:2.99,status:TapeStatus.RENTED,rating:2,customer: CUSTOMERS[3]},
    { id: 12, title: 'Life Of Brian', director: 'Terry Jones', year: 1979,price:3.99,status:TapeStatus.RENTED,rating:5,customer: customer2 }
];
