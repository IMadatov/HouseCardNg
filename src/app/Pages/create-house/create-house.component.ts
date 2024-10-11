import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageService } from '../../Service/Services/image.service';
import { CommonModule } from '@angular/common';
import { CreateHouseService } from '../../Service/Services/create-house.service';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { Housinglocation } from '../../Models/housinglocation';

@Component({
  selector: 'app-create-house',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers:[ImageService],
  templateUrl: './create-house.component.html',
  styleUrl: './create-house.component.css',
})
export class CreateHouseComponent {
  constructor(
    public imageService: ImageService,
    private createService: CreateHouseService
  ) {}

  createCardForm = new FormGroup({
    houseName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    State: new FormControl('', [Validators.required]),
    wifi: new FormControl(false),
    loundry: new FormControl(false),
    availableUnits: new FormControl('', [Validators.required]),
    price:new FormControl('',[
      Validators.required,
      Validators.min(0)
    ])
  });

  postHouse() {
    let valueForm = this.createCardForm.value;
    // console.log(valueForm.State);

    this.createService.createHouse(
      {
        houseId: 0,
        houseName: valueForm.houseName,
        city: valueForm.city,
        state: valueForm.State,
        availableUnits: parseInt(valueForm.availableUnits!),
        wifi: valueForm.wifi == true,
        loundry: valueForm.loundry == true,
        photoId: 0,
        createdUserId: 0,
        price:valueForm.price?.toString()
      },
      this.imageService.file!
    );
    this.createCardForm.reset()
    this.imageService.file=null;
  }
}
