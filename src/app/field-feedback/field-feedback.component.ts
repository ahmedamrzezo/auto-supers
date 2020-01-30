import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-feedback',
  templateUrl: './field-feedback.component.html',
  styleUrls: ['./field-feedback.component.scss']
})
export class FieldFeedbackComponent implements OnInit {

  @Input() valid: boolean;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}
