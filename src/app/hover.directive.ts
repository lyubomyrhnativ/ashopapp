import { Directive, HostBinding, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('class.hover') classHover=false;
  @HostListener('mouseover') mouseOver(){
    this.classHover=true;
  }
  @HostListener('mouseout') mouseOut(){
    this.classHover=false;
  }
  constructor() { }

}
