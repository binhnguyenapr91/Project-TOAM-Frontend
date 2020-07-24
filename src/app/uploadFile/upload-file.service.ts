import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {FileUpload} from '../model/file-upload';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  // tslint:disable-next-line:typedef
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFileUpload(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  // tslint:disable-next-line:typedef
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.key).then(() => {
      this.deleteFileStorage(fileUpload.name);
    }).catch(error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  private deleteFileDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }

  // tslint:disable-next-line:typedef
  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
