import { Component, OnInit } from '@angular/core';
import {CarouselService} from './carousel.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
src1={};
src2={};
src3={};



  constructor(private carou:CarouselService) { }

  ngOnInit() {
  	this.src1=this.carou.src1;
this.src2=this.carou.src2;
this.src3=this.carou.src3;

  }

}
