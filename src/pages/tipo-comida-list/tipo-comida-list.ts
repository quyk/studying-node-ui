import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//MODEL 
import { TipoComida } from '../../models/tipo-comida'; 
 
// PROVIDER 
import { TipoComidaData } from '../../providers/tipo-comida-data'; 
 
// PAGINA FORMULARIO 
import { TipoComidaForm } from '../tipo-comida-form/tipo-comida-form'; 

@Component({
  selector: 'page-tipo-comida-list',
  templateUrl: 'tipo-comida-list.html'
})
export class TipoComidaList 
{

  itens = [];

  constructor(
    public navCtrl: NavController,
    public tipoComidaData: TipoComidaData)
    {
      console.log(this.findAll());
      this.findAll();
    }

  getItems(ev: any) 
  {
    // recupera o valor do evento 
    let val = ev.target.value; 
 
    // if the value is an empty string don't filter the items 
    if (val && val.trim() != '') 
    { 
      this.itens = this.itens.filter((item) => 
      { 
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1); 
      }) 
    }  
    else 
    { 
      this.findAll(); 
    } 
  }

  update(event, item)
  {
    this.navCtrl.push(TipoComidaForm, {tipoComida: item});
  }

  delete(event, item)
  {
      this.tipoComidaData.delete(item).subscribe( 
        res => {
          this.navCtrl.push(TipoComidaList);
        });
  }

  findAll()
  { 
    this.tipoComidaData.findAll().subscribe(tiposComida => 
    { 
      this.itens = tiposComida; 
    }); 
  } 
 
  goToCreateTypeFood()
  { 
    this.navCtrl.push(TipoComidaForm,{}); 
  } 

  itemSelected(objeto)
  {
      // this.navCtrl.push(TipoComidaDetails, 
      // {
      //   objeto: objeto
      // });
      console.log(objeto);
  }

}
