import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, FormControl } from '@angular/forms';

@Directive({
  selector: '[requiredFile]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: RequiredFileDirective, multi: true}
  ]
})
export class RequiredFileDirective implements Validators{
  static validate(control: FormControl): {[key: string]: any} {
    return control.value == null || control.value.length == 0? {'required': true}: null;
  }

  validate(control: FormControl): {[key: string]: any} {
    return RequiredFileDirective.validate(control);
  }
}
