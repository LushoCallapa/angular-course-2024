import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [AlertComponent, NavbarComponent, CardComponent],
  imports: [CommonModule],
  exports: [AlertComponent, NavbarComponent, CardComponent],
})
export class SharedModule {}
