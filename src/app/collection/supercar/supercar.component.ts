import { Component, OnInit, Input } from '@angular/core';

import { SuperCar } from '../super-car';
import { PagesService } from 'src/app/shared/pages.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-supercar',
  templateUrl: './supercar.component.html',
  styleUrls: ['./supercar.component.scss']
})
export class SupercarComponent implements OnInit {

  @Input() superCar: SuperCar;
  @Input() superCode: string;

  constructor() { }

  ngOnInit() {
  }

}
