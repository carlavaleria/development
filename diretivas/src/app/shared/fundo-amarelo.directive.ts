import { element } from 'protractor';
import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef : ElementRef,
  private  _renderer : Renderer) {
    //console.log(this._elementRef);
   // this._elementRef.nativeElement.style.backgroundColor='yellow';
   this._renderer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color',
    'yellow'
    );

  } 
}
