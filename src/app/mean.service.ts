import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MEANService {
  public data=[{"MN":"Drotin Ds","RN":"Subal Gupta","R":3},
               {"MN":"Drotin Ds","RN":"Samiran Biswas","R":4},
               {"MN":"Calpol","RN":"Rahil Anwar","R":2},
               {"MN":"Calpol","RN":"Gurdeep Singh","R":4}]
  getdata(){
    return this.data
  }

  constructor() { }
}
