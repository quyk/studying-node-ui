import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//MODEL 
import { Tipo } from '../../models/tipo'; 
 
// PROVIDER 
import { TipoData } from '../../providers/tipo-data'; 
 
// PAGINA FORMULARIO 
import { TipoList } from '../tipo-list/tipo-list'; 


@Component({
  selector: 'page-tipo-form',
  templateUrl: 'tipo-form.html'
})

export class TipoForm 
{

  tipo = {};
  titulo = "Adicionar Tipo";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tipoData: TipoData) 
    {
      var tipoAux = navParams.get('tipo');

      if(tipoAux != undefined)
      {
        this.tipo = tipoAux;
        this.titulo = "Alterar Tipo"; 
      }
    }

  save() {
    if(!("_id" in this.tipo))
    {
      this.tipoData.create(this.tipo).subscribe(
        res => {
          this.navCtrl.push(TipoList, {});
        },
        error => {
          console.log(error);
        }
      );
    }
    else
    {
      this.tipoData.update(this.tipo).subscribe(
        res => {
          this.navCtrl.push(TipoList);
        }, 
        error => {
          console.log(error);
        }
      )
    }
  }
}
