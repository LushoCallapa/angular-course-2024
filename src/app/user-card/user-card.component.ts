import {
  AfterContentInit,
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
    AfterViewInit
{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  @ViewChild('buttonTest') buttonTest!: ElementRef

  password: string = "";
  showButton: boolean = false;

  constructor() {
    console.log("user card connstructor");
  }

  ngOnInit(): void {
    console.log("user card On Init");
    //this.password = this.name + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("user card Destroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("user card Change");

    this.password =
      changes["name"].currentValue +
      " " +
      changes["email"].currentValue +
      " Password";
  }

  ngDoCheck(): void {
    console.log("Do Check User Card");
  }

  ngAfterContentInit(): void {
    console.log("After Content Init User Card");
  }

  ngAfterViewInit(): void {
    console.log("NG AFTER VIEW INIT")
    console.log("Buttom Test", this.buttonTest)
    this.buttonTest.nativeElement.textContent = "aaaaaaaa"
  }
  public onSendData() {
    this.sendData.emit("hi from child component");
  }
}
