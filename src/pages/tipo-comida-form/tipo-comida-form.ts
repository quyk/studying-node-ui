import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//MODEL 
import { TipoComida } from '../../models/tipo-comida'; 
 
// PROVIDER 
import { TipoComidaData } from '../../providers/tipo-comida-data'; 
 
// PAGINA FORMULARIO 
import { TipoComidaList } from '../tipo-comida-list/tipo-comida-list'; 

@Component({
  selector: 'page-tipo-comida-form',
  templateUrl: 'tipo-comida-form.html'
})

export class TipoComidaForm 
{
  tipoComida = {};
  titulo = "Adicionar Tipo de comida";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tipoComidaData: TipoComidaData) 
    {
      var tipoAux = navParams.get('tipoComida');

      if(tipoAux != undefined)
      {
        this.tipoComida = tipoAux;
        this.titulo = "Alterar Tipo de comida"; 
      }
    }

  save() {
    if(!("_id" in this.tipoComida))
    {
      this.tipoComidaData.create(this.tipoComida).subscribe(
        res => {
          this.navCtrl.push(TipoComidaList, {});
        },
        error => {
          console.log(error);
        }
      );
    }
    else
    {
      this.tipoComidaData.update(this.tipoComida).subscribe(
        res => {
          this.navCtrl.push(TipoComidaList);
        }, 
        error => {
          console.log(error);
        }
      )
    }
  }
}
