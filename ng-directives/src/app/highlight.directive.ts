import {
    Directive, ElementRef,HostListener
}
from '@angular/core';

@Directive({ selector: '[appHighlight]' }) 
export class HighlightDirective {
    // Constructor di injection
    constructor(private element:ElementRef) {
        this.element.nativeElement.style.backgroundColor = 'yellow'
    }
   
   @HostListener('mouseenter')//attach any js event
    public onMouseEnter(){
        this.highLight('yellow')
    }
    @HostListener('mouseleave')
    public onMouseLeave(){
      this.highLight(null)
    }
       
    private highLight(color: string) {
        this.element.nativeElement.style.backgroundColor = color
    }
}

// @RestController
// class UserController{

//    @Inject
//    private UserService userservice

// }

// class UserService{

// }
