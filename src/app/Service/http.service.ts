import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Housinglocation } from '../housinglocation';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlHome="http://localhost:5049/api/Home/";//https://localhost:7131/api/Home/GetAllHouses
  urlImage="http://localhost:5049/api/Image/";

  constructor(private http:HttpClient) { }
  getAllHouses():Observable<Housinglocation[]>{
    return this.http.get<Housinglocation[]>(this.urlHome+"GetAllHouses").pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
  getByIdHouse(id:number):Observable<Housinglocation>{
    return this.http.get<Housinglocation>(this.urlHome+"GetByIdHouse"+"/"+id).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
  postHouse(house:Housinglocation ):Observable<Housinglocation>{
    return this.http.post<Housinglocation>(this.urlHome+"PostHouse",house).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
  updateHouse(house:Housinglocation ):Observable<Housinglocation>{
    return this.http.put<Housinglocation>(this.urlHome+"UpdateHouse",house).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
  deleteHouse(id:number):void{
    this.http.delete(this.urlHome+"DeleteHouse/"+id).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }

  //Image**********************************************************************************
  // getAllImage():Observable<Housinglocation[]>{
  //   return this.http.get<Housinglocation[]>(this.urlHome+"GetAllHouses").pipe(
  //     catchError((err,caught)=>{console.error(err); return caught;})
  //   );
  // }
  // getByIdImage(id:number):Observable<Housinglocation>{
  //   return this.http.get<Housinglocation>(this.urlHome+"GetByIdHouse"+"/"+id).pipe(
  //     catchError((err,caught)=>{console.error(err); return caught;})
  //   );
  // }
  // postImage(house:Housinglocation ):Observable<Housinglocation>{
  //   return this.http.post<Housinglocation>(this.urlImage+"PostImage",house).pipe(
  //     catchError((err,caught)=>{console.error(err); return caught;})
  //   );
  // }
  deleteImage(id:number):void{
    this.http.delete(this.urlImage+"DeleteImage/"+id).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
  getImageById(id:number|undefined):Observable<Blob>{
    return this.http.get(this.urlImage+"GetImageById/"+id,{responseType:"blob"}).pipe(
      catchError((err,caught)=>{console.error(err); return caught;})
    );
  }
}
