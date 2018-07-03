import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[myIonicInput]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
        // '(keypress)': 'onKeyPress'
    }
  })
  export class MyIonicInputDirective{
    @Input('myIonicInput') myStyles: any;
    constructor(el: ElementRef){
        el.nativeElement.onKeypress = function(e){
            console.log(e);
            if ('-!@#$%^*()-='.includes(String.fromCharCode(e.keyCode))){
                e.preventDefault();
                return;
            }
    }

  }
    onMouseEnter() {
        this.myStyles.showEmail = true;
    }
    onMouseLeave(e){
        this.myStyles.showEmail = false;
    }
    // onKeyPress will not work with ion-input directly
    // because the actual input element is a child of ion-input
    // onKeyPress() {
    // console.log("onKeyPress");
    // }
}