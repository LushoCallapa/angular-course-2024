import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { CounterComponent } from './counter/counter.component';
import { filter, from, map, tap } from 'rxjs';
import { AppColorsDirective } from './app-colors.directive';
import { CreateHtmlDirective } from './create-html.directive';
import { PurePipe } from './pure.pipe';
import { ImpurePipe } from './impure.pipe';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

interface IPerson{
  name:string,
  age: number,
  gender: string,
}

interface IForm {
  name: string
  score: string
  school: string
  proffesor: string
  university: string
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    UserCardComponent,
    CalculatorComponent,
    HistoryComponent,
    CommonModule,
    PersonCardComponent,
    CounterComponent,
    AppColorsDirective,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  scoreControl = new FormControl<string>('asdasdasd', [Validators.required])

  name:string = 'testName'
  lastName:string = ''

  users = [
    { name: "abc", email: "abc@gmail.com" },
    { name: "dfg", email: "pepe@gmail.com" },
  ];
  selectedUser: any = this.users[0];
  userCardCreated: boolean = false;
  persons: IPerson[];
  youtube = from([1, 2, 3, 4, 5, 6]);
  students: number[] = [1, 2, 3, 4, 5, 6,7,8,9];

  studentForm!: FormGroup
  student2Form!: UntypedFormGroup

  constructor(private router: Router, private formBuilder: FormBuilder,  private untypedFormBuilder: UntypedFormBuilder) {
    this.persons = [
      { name: "Luis", age: 20, gender: "male" },
      { name: "Juana", age: 17, gender: "female" },
      { name: "Roberto", age: 16, gender: "male" },
      { name: "Rafaela", age: 20, gender: "female" },
    ];
    this.youtube.subscribe((res) => {
      console.log("Susbribed 1 You Tube Data", res);
    });

    this.scoreControl.valueChanges.subscribe((res) => {
      console.log('SCORE VALUE OBSERVABLE: ', res)
    })
    
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })

    this.student2Form = this.untypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })


    /* this.studentForm = new FormGroup({
      name: new FormControl<string>('sdasdasdasd', [Validators.required]),
      score: new FormControl<string>('sdfsdfsdf'),
      school: new FormControl<string>(''),
      proffesor: new FormControl<string>(''),
      university: new FormControl<string>('')
    }) */

    this.studentForm.valueChanges.subscribe((res) => {
      console.log('FORM GROUP OBSERVABLE: ', res)
    })
  }

  print(){
    console.log('FORM NAME: ', this.studentForm.get('name'))
  }

  onSendData() {
    console.log('FORM GROUP: ', this.studentForm)
  }

  onPrintScore(){
    console.log('SCORE: ', this.scoreControl.value)
  }
  
  onSubmit(data:any){
    console.log('TEMPLATE DRIVEN FORM: ', data)
  }

  public onCalculator(){
    this.router.navigate(['calculator'], {queryParams: {name: 'John', age: 20}})
  }

  public goToStudentModule() {
    this.router.navigate(['student'])
  }
  public goToCard() {
    this.router.navigate(['card', 1])
  }


  public sumPure(a:number, b:number): number {
    return a + b;
  }
  public sumImpure(a:number, b:number): number {
    return a + b + Math.random();
  }

  public addVideo() {
    this.youtube
      .pipe(
        map((res) => {
          console.log('MAP',res);
          if(res % 2 === 0){
            return res;
          } 
          else{
            return null;
          }
        }),
        tap((res)=> console.log("VALUE, TAP",res)),
        filter((res :number | null)=> res!=null)
      )
      .subscribe((res) => {
        console.log("Susbribed 2 You Tube Data", res);
      });
  }

  public countFemale() {
    return this.persons.filter((person) => person.gender === "female").length;
  }

  public countMale() {
    return this.persons.filter((person) => person.gender === "male").length;
  }

  public countDiscount() {
    return this.persons.filter((person) => person.age >= 18).length;
  }

  public deleteDiscount() {
    this.persons = this.persons.filter((person) => person.age < 18);
  }

  public getColor(value: any){
    console.log("value", value);
  }
  public addNumber() {
    this.students = [...this.students, 12]
  }
  history: Array<[string, number]> = [];
  result: number = 0;
  title: number = 12;
  animals: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  var1 = 0;
  var2 = null;
  var3 = "hola";
  pets: number[] = [1, 2, 3, 4, 5];
  parents: number[] = [7, 8, 9, 10];

  // constructor () {
  //   const {name,age} = this.person;
  //   console.log('destructuracion',name+' '+ age);
  //   let both = {...this.pets,...this.parents};
  //   console.log("Spreed Operator",both)

  //   console.log("Rest Operator", this.sum2(1,2,3,4,5))
  //   console.log("Nullish Cualesing", this.var2 ?? this.var3)
  //   console.log("OR", this.var1 || this.var3)

  //   // console.log('substract', this.subtract(8,4));
  //   // console.log('MAP: ',this.animals.map((animal) => (animal + 'new') ));
  //   // console.log('FOREACH: ',this.animals.forEach((animal) => (animal + 'new') ));
  //   // console.log('FIND: ',this.animals.find((animal) => (animal === 'b') ));
  //   // console.log('FIND: ',this.animals.filter((animal) => (animal === 'c') ));
  //   // console.log('INDEXOF: ',this.animals.indexOf('c'));
  // }

  public sum2(...persons: number[]) {
    //return persons[0] + persons[1];
    return persons.reduce((acc, valor) => acc + valor, 0);
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray() {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i] % 2 == 0) {
        //console.log('person =', persons[i])
      }
    }
  }

  public receiveData(data: any) {
    console.log("Print Father Component", data);
  }

  public onResult(data: any) {
    this.result = data.result ?? 0;
    this.newResult(data);
  }

  public newResult(data: any) {
    const { type, result } = data ?? ["", 0];
    this.history.push([type, result]);
  }

  public onReset(data: any) {
    this.result = 0;
  }
  sumar(): number {
    return 1 + 2;
  }
  public suma = () => {
    return 1 + 2;
  };
}
