import { Injectable } from '@angular/core';
import { Housinglocation } from '../../Models/housinglocation';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  listHome: Housinglocation[] | undefined;
  filterHousingLocationList: Housinglocation[] | undefined;
  home:Housinglocation|undefined;
  constructor(private service: HttpService, private toastr: ToastrService) {}

  getHomes() {
    this.service.getAllHouses().subscribe({
      next: (respo) => {
        // console.log(respo)
        this.listHome = respo;
        
        this.filterHousingLocationList = this.listHome;

        // console.log(this.listHome);
      },

      error: (err) => console.error(err),
    });
  }
  filterResult(text: string) {
    if (text) {
      this.filterHousingLocationList = this.listHome?.filter((x) =>
        x.city!.toUpperCase().includes(text.toUpperCase())
      );
      return;
    }
    this.filterHousingLocationList = this.listHome;
  }
  getHome(id:number,userService:UserService,imageService:ImageService){
    this.service.getHouse(id).subscribe({
      next:rep=>{
        this.home=rep;
        userService.getUserByID(this.home.createdUserId);
        imageService.getImage(this.home.photoId)
      },
      error:err=>{
        console.error(err);
      }
    });
  }
}
