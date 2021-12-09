import { Component, OnInit } from '@angular/core';
import { MEANService } from '../mean.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public data: any=[]
  constructor(private d:MEANService) { }

  ngOnInit(): void {
        this.data=this.d.getdata()
  }

}
