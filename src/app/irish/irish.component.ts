import { Component, OnInit } from '@angular/core';
import {HalfService} from '../Services/half.service';

@Component({
  selector: 'app-irish',
  templateUrl: './irish.component.html'
})
export class IrishComponent implements OnInit {

  constructor(private halfs: HalfService) { }

  ngOnInit() {
  }
  uimhir : number;
	leath : number;

  	fuairHalf() {
      this.leath = this.halfs.getHalf(this.uimhir);
  		//this.leath = this.uimhir/2;
  	}

}
