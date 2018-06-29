import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  img_src=["./assets/img_tour.jpg","./assets/img_food.jpg","./assets/img_healthcare.jpg"];
  button_name=["Play Video"];
  descOne=["Add Places","Add Food","Add HealthServices"];
  descTwo=["Browse travel packages.","Browse the different food dishes.","Browse different health centres."]

  videoBar=[
  {
    "ImgDir":this.img_src[0],
    "buttonLabel":this.button_name[0],
    "Description1":this.descOne[0],
    "Description2":this.descTwo[0]
  },

  {
    "ImgDir":this.img_src[1],
    "buttonLabel":this.button_name[0],
    "Description1":this.descOne[1],
    "Description2":this.descTwo[1]
  },

  {
    "ImgDir":this.img_src[2],
    "buttonLabel":this.button_name[0],
    "Description1":this.descOne[2],
    "Description2":this.descTwo[2]
  }

  ]

  constructor() { }

}
