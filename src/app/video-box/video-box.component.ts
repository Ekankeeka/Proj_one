import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.css']
})
export class VideoBoxComponent implements OnInit {
  panelArray=[];

  constructor(private sidepane:ServicesService) {
	  let l=this.sidepane.videoBar.length;
	  for(let i=0;i<l;i++){
		  this.panelArray[i]=this.sidepane.videoBar[i];
	  }

   }

  ngOnInit() {
  }

}
