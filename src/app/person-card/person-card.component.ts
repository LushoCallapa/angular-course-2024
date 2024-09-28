import { Component, Input } from '@angular/core';

interface IPerson{
  name:string,
  age: number,
  gender: string,
}

@Component({
  selector: "person-card",
  standalone: true,
  imports: [],
  templateUrl: "./person-card.component.html",
  styleUrl: "./person-card.component.scss",
})
export class PersonCardComponent {
  @Input() person: IPerson = {
    name: "",
    age: 0,
    gender: "",
  };
}
