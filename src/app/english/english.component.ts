import { Component, OnInit } from '@angular/core';
import {HalfService} from '../Services/half.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html'
})
export class EnglishComponent implements OnInit {

  constructor(private halfs: HalfService) { }

  ngOnInit() {
  }
  number : number;
	half : number;

  	getHalf() {
      this.half = this.halfs.getHalf(this.number);
  		//this.half = this.number/2;
  	}

}
