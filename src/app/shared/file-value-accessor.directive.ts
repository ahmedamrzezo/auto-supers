import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'input[type="file"]',
  host : {
    '(change)' : 'onChange($event.target.files)',
    '(blur)': 'onTouched()'
  },
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessorDirective, multi: true}
  ]
})
export class FileValueAccessorDirective implements ControlValueAccessor{

  onChange(ev) {
  }
  onTouched(){}
  
  writeValue(value) {}
  registerOnChange(fn: any) {this.onChange = fn;}
  registerOnTouched(fn: any) {this.onTouched = fn;}
}
