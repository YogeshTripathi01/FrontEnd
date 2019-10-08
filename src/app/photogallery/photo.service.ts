import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private  http:HttpClient) { }

  public GetPhotos(){
    return this.http.get("https://localhost:5001/api/Products/");
  }
}
