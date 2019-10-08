import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {

  constructor(private _photo:PhotoService,private router:Router) { }
Photos:any;

  ngOnInit() {
this._photo.GetPhotos()
.subscribe(
  (res:any)=>
  {
    console.log(res),
    this.Photos=res;
  },
  err=>{
    console.log(err);
  }
);
  }

}
