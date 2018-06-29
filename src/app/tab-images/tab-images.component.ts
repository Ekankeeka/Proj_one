import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-tab-images',
  templateUrl: './tab-images.component.html',
  styleUrls: ['./tab-images.component.css']
})
export class TabImagesComponent implements OnInit {
  imageArray=[];
  constructor(private image:ImageService) {
    let l=this.image.imgBar.length;
    for(let i=0;i<l;i++){
      this.imageArray[i]=this.image.imgBar[i];
    }
   }

  ngOnInit() {
  }

}
