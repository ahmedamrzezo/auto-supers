import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './click-outside/click-outside.directive';
import { DoubleClickDirective } from './double-click.directive';
import { LabelOverflowInputDirective } from './label-overflow-input.directive';
import { LoadingComponent } from '../loading/loading.component';
import { FieldFeedbackComponent } from '../field-feedback/field-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragListItemDirective } from './drag-list-item.directive';



@NgModule({
  declarations: [
    ClickOutsideDirective,
    DoubleClickDirective,
    LabelOverflowInputDirective,
    DragListItemDirective,
    LoadingComponent,
    FieldFeedbackComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ClickOutsideDirective,
    DoubleClickDirective,
    LabelOverflowInputDirective,
    DragListItemDirective,
    LoadingComponent,
    FieldFeedbackComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
