import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

interface IPerson{
  name:string,
  lastName: string,
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: number = 12;
  animals: string[] = ['a','b','c','d','e','f','g'];
  
  person: IPerson = {
    name: 'Luis',
    lastName: 'Callapa',
    age: 20
  }

  var1 = 0
  var2 = null
  var3='hola';
  pets: number[] = [1,2,3,4,5];
  parents: number[] = [7,8,9,10];
  constructor () {
    const {name,age} = this.person;
    console.log('destructuracion',name+' '+ age);
    let both = {...this.pets,...this.parents};
    console.log("Spreed Operator",both)

    console.log("Rest Operator", this.sum2(1,2,3,4,5))
    console.log("Nullish Cualesing", this.var2 ?? this.var3)
    console.log("OR", this.var1 || this.var3)

    // console.log('substract', this.subtract(8,4));
    // console.log('MAP: ',this.animals.map((animal) => (animal + 'new') ));
    // console.log('FOREACH: ',this.animals.forEach((animal) => (animal + 'new') ));
    // console.log('FIND: ',this.animals.find((animal) => (animal === 'b') ));
    // console.log('FIND: ',this.animals.filter((animal) => (animal === 'c') ));
    // console.log('INDEXOF: ',this.animals.indexOf('c'));
  }

  public sum2(...persons: number[]){
    //return persons[0] + persons[1];
    return persons.reduce((acc, valor) => (acc+valor) , 0);
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
          //console.log('person =', persons[i])
        }
    }
  }

  public receiveData(data: any){
    console.log("Print Father Component",data);
  }

  // sumar(): number{
  //   return 1 + 2;
  // }
  // public  suma = () => {
  //   return 1 + 2;
  // }
}
