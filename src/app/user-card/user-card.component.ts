import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent implements OnInit, OnDestroy,OnChanges{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  password: string ="";

  constructor() {
    console.log("user card connstructor");
  }

  ngOnInit(): void {
    console.log("user card On Init")
    //this.password = this.name + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("user card Destroy")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("user card Change")

    this.password = changes['name'].currentValue + ' ' + changes['email'].currentValue + ' Password'
  }

  public onSendData() {
    this.sendData.emit("hi from child component");
  }
}
