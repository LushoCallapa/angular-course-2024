import { Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: "[ngCreateHtml]",
  standalone: true,
})
export class CreateHtmlDirective implements OnInit, OnChanges{
  @Input()
  set ngCreateHtml(value: boolean){
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.sendMessage.emit('Se ha Creado');
    }else{
      this.viewContainer.clear();
      this.sendMessage.emit('Se ha Eliminado');
    }
  }

  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string> ();
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {  }

  ngOnInit(): void {
    // if(this.show){
    //   this.viewContainer.createEmbeddedView(this.templateRef)
    // }else{
    //   this.viewContainer.clear();
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['ngCreateHtml']){
    //   if(this.ngCreateHtml && changes['ngCreateHtml'].currentValue){
    //     this.viewContainer.createEmbeddedView(this.templateRef)
    //   }else{
    //     this.viewContainer.clear();
    //   }
    // }
  }
}
