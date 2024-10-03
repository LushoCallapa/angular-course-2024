import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  @ViewChild('buttonTest', {static: false}) buttonTest!: ElementRef
  @ViewChild('buttonShow', {static: true}) buttonShow!: ElementRef

  password: string = "";
  showButton: boolean = true;

  constructor() {
    //console.log("user card connstructor");
  }

  ngOnInit(): void {
    //console.log("user card On Init");

    this.buttonShow.nativeElement.textContent = "Button Show OnInit";
    // this.buttonTest.nativeElement.textContent = "Button Test OnInit";
    //this.password = this.name + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    //console.log("user card Destroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log("user card Change");

    this.password =
      changes["name"].currentValue +
      " " +
      changes["email"].currentValue +
      " Password";
  }

  ngDoCheck(): void {
    //console.log("Do Check User Card");
  }

  ngAfterContentInit(): void {
    //console.log("After Content Init User Card");
  }

  ngAfterViewInit(): void {
    //console.log("NG AFTER VIEW INIT")
    //console.log("Buttom Test", this.buttonTest)
    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = "Button Test Afeter View Init";
    }
  }

  ngAfterContentChecked(): void {
    //console.log("AfterContentChecked")
  }

  ngAfterViewChecked(): void {
    //console.log("AfterViewChecked")
  }
  public onSendData() {
    this.sendData.emit("hi from child component");
  }
}
