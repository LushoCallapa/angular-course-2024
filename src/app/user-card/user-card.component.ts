import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent implements OnInit, OnDestroy{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  constructor() {
    console.log("user card connstructor");
  }

  ngOnInit(): void {
    console.log("user card On Init")
  }

  ngOnDestroy(): void {
    console.log("user card Destroy")
  }

  public onSendData() {
    this.sendData.emit("hi from child component");
  }
}
