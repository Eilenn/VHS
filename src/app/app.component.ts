import { Component } from '@angular/core';
import{Tape} from './tape';

@Component({
  selector: 'my-app',
  templateUrl: './templates/vhsListing.html',
  //'./templates/mainView.html',
})
export class AppComponent  { 
  name = 'VHS Rental Service'; 
  tape=new Tape(1,"Casablanca","Michael Curtiz",1942);
  tape2: Tape={
    id: 2,
    title: 'The Sting',
    director: 'George Roy Hill',
    year: 1973,
    category: 'crime'
  };
tapes=TAPES;

}
   const TAPES: Tape[] = [
     { id: 1, title: 'Apocalypse Now',director:'Francis Ford Copola',year:1979},
     { id: 2, title: 'The Sting',director:'George Roy Hill',year:1973},
  { id: 3, title: 'Godfather',director:'Francis Ford Copola',year:1972 },
 { id: 4, title: 'One Flew Over the Cuckoo\'s Nest',director:'Miloš Forman',year:1975 },
  { id: 5, title: 'Back to the Future',director:'Robert Zemeckis',year:1985 },
   { id: 6, title: 'Star Wars Episode IV: A New Hope',director:'George Lucas',year:1977 },
    { id: 7, title: 'Star Wars: Episode V - The Empire Strikes Back',director:'George Lucas',year:1980 },
     { id: 8, title: 'Dead Poets Society',director:'Peter Weir',year:1989 },
      { id: 9, title: 'Alien',director:'Ridley Scott',year:1979 },
      { id: 10, title: 'Star Wars: Episode VI - Return of the Jedi',director:'George Lucas',year:1983},
       { id: 11, title: 'Rocky',director:'John G. Avildsen',year:1976},
       { id: 12, title: 'Life Of Brian',director:'Terry Jones',year:1979}
];
