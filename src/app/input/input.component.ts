import { Component, OnInit } from '@angular/core';

import { MEANService } from '../mean.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
   public data: any=[]
  constructor(private dInfo:MEANService) { }

  ngOnInit(): void {
    this.data=this.dInfo.getdata()
  }

}
