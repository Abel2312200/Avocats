import { Injectable } from '@angular/core';
import { IAvocat } from './liste-avocats/Avocat';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public avocat : IAvocat|undefined;
  constructor() { }
  public setAvocat(avocat : IAvocat){
    this.avocat=avocat;
  }
  public getAvocat(){
    return this.avocat;
  }
}
