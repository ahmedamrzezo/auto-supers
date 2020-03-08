import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {
  // Main upload task
  task: AngularFireUploadTask;

  // percentage
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // download URL
  downloadURL: Observable<string>;


  // final image 
  image = new BehaviorSubject<string>('');

  constructor(
    private fireStorage: AngularFireStorage
  ) { }

  toggleHover(event: boolean) {
    return event;
  }

  startUpload(event: FileList) {
    const files = event.item(0);

    if (files.type.split('/')[0] !== 'image') {
      console.error('unsported file');
      return;
    }

    const imgPath = `images/${new Date().getTime()}_${files.name}`;
    const ref = this.fireStorage.ref(imgPath);

    // start upload process
    this.task = this.fireStorage.upload(imgPath, files);
    
    // progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();
    
    this.snapshot.pipe(
      finalize(() => {
        // download url 
        ref.getDownloadURL().subscribe(
          url => {
            this.image.next(url);
          }
        );

      })
    ).subscribe();

  }


}
