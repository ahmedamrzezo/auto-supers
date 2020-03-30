import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { DoubleClickDirective } from './double-click.directive';
import { LabelOverflowInputDirective } from './label-overflow-input.directive';
import { LoadingComponent } from '../loading/loading.component';
import { FieldFeedbackComponent } from '../field-feedback/field-feedback.component';



@NgModule({
  declarations: [
    ClickOutsideDirective,
    DoubleClickDirective,
    LabelOverflowInputDirective,
    LoadingComponent,
    FieldFeedbackComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClickOutsideDirective,
    DoubleClickDirective,
    LabelOverflowInputDirective,
    LoadingComponent,
    FieldFeedbackComponent,
  ]
})
export class SharedModule { }
