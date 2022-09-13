import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergerService {

  constructor() { }

  whatIfWeMerged(chungus:number):any{
    return `There are ${chungus} chungi trying to merge`;
  }

  weAreMerged():any{
    return "c h u n g";
  }
}
