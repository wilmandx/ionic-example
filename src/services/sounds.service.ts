import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class SoundsService {
  soundsArray = new Array();
  constructor(){
    this.soundsArray['a']={
        symbol: '@',
        exception: 'text 1',
        examples:[{text:'one',sound:'one'},{text:'two',sound:'two'}],
        sound:''
    };
    this.soundsArray['b']={
        symbol: 'D',
        exception: 'text 2',
        examples:[{text:'one2',sound:'one'},{text:'two2',sound:'two'}],
        sound:''
    };
  }

  getSound(sound:string){
    return this.soundsArray[sound];
  }
}