import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imgSrc=["./assets/img_lights.jpg","./assets/img_nature.jpg","./assets/img_mountains.jpg","./assets/img_snow.jpg"];
  imgDesc=["Lights","Nature","Mountains","Snow"];

  imgBar=[
    {
      "ImgSrc":this.imgSrc[0],
      "ImgLab":this.imgDesc[0]
    },
    {
      "ImgSrc":this.imgSrc[1],
      "ImgLab":this.imgDesc[1]
    },
    {
      "ImgSrc":this.imgSrc[2],
      "ImgLab":this.imgDesc[2]
    },
    {
      "ImgSrc":this.imgSrc[3],
      "ImgLab":this.imgDesc[3]
    }
  ]


  constructor() { }
}
