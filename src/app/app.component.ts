import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface IPerson{
  name:string,
  lastName: string,
  age: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: number = 12;
  animals: string[] = ['a','b','c','d','e','f','g'];
  
  person: IPerson = {
    name: 'a',
    lastName: 'a',
    age: 12
  }
  constructor () {
    console.log('substract', this.subtract(8,4));
    console.log('MAP: ',this.animals.map((animal) => (animal + 'new') ));
    console.log('FOREACH: ',this.animals.forEach((animal) => (animal + 'new') ));
    console.log('FIND: ',this.animals.find((animal) => (animal === 'b') ));
    console.log('FIND: ',this.animals.filter((animal) => (animal === 'c') ));
    console.log('INDEXOF: ',this.animals.indexOf('c'));
  }

  public sum(num1: number, num2: number ): number{
    return num1 + num2;
  }

  private subtract(num1: number, num2: number ): number {
    return num1 - num2;
  }

  public getArray(){
    const persons: number[] = [1,2,3,4,5];
    for(let i =0; i < persons.length;i++){
        if(persons[i]%2 == 0){
          console.log('person =', persons[i])
        }
    }
  }

  // sumar(): number{
  //   return 1 + 2;
  // }
  // public  suma = () => {
  //   return 1 + 2;
  // }
}
