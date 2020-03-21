import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PagesService } from 'src/app/shared/pages.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SuperCarService } from '../super-car.service';
import { fadeInAnimation } from '../../animations';
import { of, asyncScheduler, Observable } from 'rxjs';
import { delay, throttleTime, map } from 'rxjs/operators';
import { ModifyFormGuard } from '../modify-form/modify-form.guard';
import { ImgUploadService } from './img-upload.service';
import { RequiredFileDirective } from 'src/app/shared/required-file.directive';
import { FirebaseError } from 'firebase';

@Component({
  selector: 'app-supercar-edit',
  templateUrl: './supercar-edit.component.html',
  styleUrls: ['./supercar-edit.component.scss'],
  animations: [
    fadeInAnimation
  ],
  providers: [ModifyFormGuard]
})
export class SupercarEditComponent implements OnInit {
  
  currentYear = new Date().getFullYear();
  superForm: FormGroup;
  superFormEngineDetails: FormGroup;
  formSubmitted = false;
  formLoading: boolean;
  formResponse: {code: number, msg: string};

  imgPercentage: Observable<number>;
  imgURLs: string[] = [];
  isDropping: boolean;

  currentRouterURL = this.router.url;

  constructor(
    private _pagesService: PagesService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private _supercarService: SuperCarService,
    private _imageUpload: ImgUploadService) { }

  ngOnInit() {

    this._pagesService.bannerContent.next({title: 'Create/Edit a Super'});

    this.superFormEngineDetails = new FormGroup({
      engineType:  new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      engineCC: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[2-8]{1}\.[1-8]{1}|[1-8]{1}/g')
        ]
      ),
      horsePower: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[0-9]{3}')
          // TODO: add accurate pattern
        ]
      ),
      torque: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[0-9]{4}')
          // TODO: add accurate pattern
        ]
      )
    })
    
    this.superForm = new FormGroup({
      carName: new FormControl(
        '', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]
      ),
      brandName: new FormControl(
        '', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ),
      manufactureYear: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern(`^(198[0-9]|199[2-9]|200[0-9]|201[0-9]|${this.currentYear})$`)
        ]
      ),
      description: new FormControl(
        '', 
        [
          Validators.required
        ]
      ),
      engineDetails: this.superFormEngineDetails,
      maxSpeed: new FormControl(
        '', 
        [
          Validators.required,
          Validators.pattern('[1-9]{3}')
          // TODO: add accurate pattern
        ]
      ),
      zeroToSixty: new FormControl(
        '', 
        [
          Validators.required
          // TODO: add accurate pattern
        ]
      ),
      price: new FormControl(
        '', 
        [
          Validators.required
          // TODO: add accurate pattern
        ]
      ),
      carImages: new FormControl(
        '', 
        [
          RequiredFileDirective.validate
        ]
      ),
    });

    this.insertDotAfterFirstNumber();

    if (this.currentRouterURL.match('edit')) {
      // this._supercarService.getSuperByCode('');
      const carCode = this.actRoute.snapshot.params.code;
      const superCar = this.getSuperData(carCode);
      delete superCar.carCode;
      const newSuper = Object.assign({}, superCar);
      
      this.superForm.setValue(newSuper);
      this.controlsAsTouchedDirty(this.superForm);
      this.controlsAsTouchedDirty(this.superFormEngineDetails);
    }
  }

  private controlsAsTouchedDirty(formGroup: FormGroup) {
    for (const control of Object.values(formGroup.controls)) {
      control.markAsTouched();
      control.markAsDirty();
    }
  }

  private checkEditAddForm() {
    if (this.currentRouterURL.match('create')) {
      this.addSuper();
    } 
    else if (this.currentRouterURL.match('edit')) {
      this.editSuper();
    }
  }

  addSuper() {
    this._supercarService.addSuperApi(this.superForm.value)
    .subscribe(
      () => {
        this.formSuccess('Super added successfully!');
      },
      err => {
        this.formFailure(err);
      }
    );
  }

  getSuperData(code: string) {
    return this._supercarService.getSuperByCode(code);
  }

  editSuper() {
    // this._supercarService.editSuperApi(this.superForm.value)
    // .subscribe(
    //   () => {
    //     this.formSuccess('Super edited successfully!');
    //   },
    //   err => {
    //     this.formFailure(err);
    //   }
    // );
    console.log('we are editing');
    
  }

  submitForm() {
    this.formSubmitted = true;

    console.log(this.superForm.value);
    if (this.superForm.invalid) {
      this.checkErrors();
    } else {
      this.formLoading = true;
      this.checkEditAddForm();
    }
  }

  // Form success method
  private formSuccess(sucMsg: string) {
    this.formLoading = false;
    this.superForm.reset();
    this.formSubmitted = false;
    this.formResponse = {code: 200, msg: sucMsg};
    of(this.formResponse).pipe(delay(3000)).subscribe(() => (this.formResponse = null));
  }

  // Form Failure method 
  private formFailure(err: FirebaseError) {
    this.formLoading = false;
    this.formResponse = {code: +err.code, msg: err.message};
  }

  private insertDotAfterFirstNumber() {
    this.superFormEngineDetails.controls.engineCC.valueChanges
    .pipe(
      throttleTime(1000, asyncScheduler, {leading: false, trailing: true}),
      map(val => val !== null? val : '')
    )
    .subscribe(
      engineCCVal => {
        let engineCCValStr = engineCCVal.toString();
        if (engineCCValStr !== '.') 
        {
          engineCCVal = engineCCValStr.substr(0, 1) + '.' + engineCCValStr[1];
          this.superFormEngineDetails.controls.engineCC.setValue(+engineCCVal);
        }
        return;
      }
    )

  }
  checkErrors() {
    this.nameErrors;
    this.brandErrors;
    this.yearErrors;
    this.descErrors;
    this.engineCCErrors;
    this.engineTypeErrors;
    this.horsePowerErrors;
    this.engineTorqueErrors;
    this.zeroHundredErrors;
    this.imagesErrors;
    this.maxSpdErrors;
    this.priceErrors;
  }
  get nameErrors() {
    if (this.superForm.get('carName').errors) {
      if (this.superForm.get('carName').errors.required) {
        return 'Car name is required'
      } else {
        return 'Car name length must be 8-50 characters'
      }
    }else {
      return
    }
  }
  get brandErrors() {
    if (this.superForm.get('brandName').errors) {
      if (this.superForm.get('brandName').errors.required) {
        return 'Brand Name is required'
      } else {
        return 'Brand Name length must be 2-15 characters'
      }
    }else {
      return
    }
  }
  get yearErrors() {
    if (this.superForm.get('manufactureYear').errors) {
      if (this.superForm.get('manufactureYear').errors.required) {
        return 'Manufacture year is required'
      } else {
        return 'Manufacture year must be 1980-2020'
      }
    }else {
      return
    }
  }
  get descErrors() {
    if (this.superForm.get('description').errors) {
      if (this.superForm.get('description').errors.required) {
        return 'Description is required'
      }
    }else {
      return
    }
  }
  get engineTypeErrors() {
    if (this.superFormEngineDetails.get('engineType').errors) {
      if (this.superFormEngineDetails.get('engineType').errors.required) {
        return 'Engine type is required'
      }
    }else {
      return
    }
  }
  get engineCCErrors() {
    if (this.superFormEngineDetails.get('engineCC').errors) {
      if (this.superFormEngineDetails.get('engineCC').errors.required) {
        return 'Engine capacity is required'
      } else {
        return 'Engine capacity must be 2.0 - 8.0 Litres'
      }
    }else {
      return
    }
  }
  get horsePowerErrors() {
    if (this.superFormEngineDetails.get('horsePower').errors) {
      if (this.superFormEngineDetails.get('horsePower').errors.required) {
        return 'Engine power is required'
      } else {
        return 'Engine power must not exceed 4 digits starts from 400 to 1500'
      }
    }else {
      return
    }
  }
  get engineTorqueErrors() {
    if (this.superFormEngineDetails.get('torque').errors) {
      if (this.superFormEngineDetails.get('torque').errors.required) {
        return 'Engine torque is required'
      } else {
        return 'Engine torque must not exceed 4 digits starts from 400 to 1500'
      }
    }else {
      return
    }
  }
  get maxSpdErrors() {
    if (this.superForm.get('maxSpeed').errors) {
      if (this.superForm.get('maxSpeed').errors.required) {
        return 'Maximum speed is required'
      } else {
        return 'Maximum speed must be 300 - 450 KMH'
      }
    }else {
      return
    }
  }
  get zeroHundredErrors() {
    if (this.superForm.get('zeroToSixty').errors) {
      if (this.superForm.get('zeroToSixty').errors.required) {
        return 'Zero to hundred KMH is required'
      } else {
        return 'Zero to hundred KMH '
      }
    }else {
      return
    }
  }
  get priceErrors() {
    if (this.superForm.get('price').errors) {
      if (this.superForm.get('price').errors.required) {
        return 'Price is required'
      } else {
        return 'Price length must be 8-50 characters'
      }
    }else {
      return
    }
  }
  get imagesErrors() {
    if (this.superForm.get('carImages').errors) {
      if (this.superForm.get('carImages').errors.required) {
        return 'Car Images is required'
      }
    }else {
      return
    }
  }
  cancelModification() {
    this.router.navigate(['/supers']);
  }

  toggleHover(ev: boolean) {
    this.isDropping = this._imageUpload.toggleHover(ev);
  }

  startUpload(listOfImages: FileList) {
    this._imageUpload.startUpload(listOfImages);
    this.imgPercentage = this._imageUpload.percentage;
    this._imageUpload.image.subscribe(url => {
      console.log(url);
      this.imgURLs.push(url);

      this.superForm.controls.carImages.setValue(this.imgURLs);
    });
  }

  /** TODO:
   * edit super detail
   * bug: multi img duplicates
   */

}
