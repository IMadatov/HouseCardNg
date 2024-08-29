import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ImageSnippet } from '../../Models/image-snippet';

@Injectable()
export class ImageService {
  selectedFile: ImageSnippet | undefined;
  constructor(private service: HttpService) {}

  file: File | null = null;
  fileUrl: string | ArrayBuffer = '';
  processFile(imageInput: any) {
    this.file = imageInput.target.files[0];
    this.fileUrl = URL.createObjectURL(this.file!);
  }
  getImage(id: number) {
    this.service.getImageById(id).subscribe({
      next: (resp: Blob) => {
        this.fileUrl = URL.createObjectURL(resp);
        // console.log('file from server' + this.fileUrl);
      },
    });
  }
}

@Injectable({ providedIn: 'root' })
export class ImageRootService {
  constructor(private service: HttpService) {}

  getImage(id: number) {
    this.service.getImageById(id);
  }
}
