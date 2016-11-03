import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Marca } from '../../models/marca';
import { MarcaData } from '../../providers/marca-data';

import { MarcaPage } from '../marca-page/marca-page';

@Component({
  selector: 'page-marca-form',
  templateUrl: 'marca-form.html'
})
export class MarcaForm {

  marca = {};

  constructor(
    public navCtrl: NavController,
    public marcaData: MarcaData) {}

  
  save(){

    // DATA VALIDATION

    this.marcaData.create(this.marca).subscribe(res => {
        this.navCtrl.push(MarcaPage,{});
    }, error => {
      console.log(error);
    });


  }



}
