import { Component } from '@angular/core'; 
import { NavController } from 'ionic-angular'; 
 
//MODEL 
import { Tipo } from '../../models/tipo'; 
 
// PROVIDER 
import { TipoData } from '../../providers/tipo-data'; 
 
// PAGINA FORMULARIO 
import { TipoForm } from '../tipo-form/tipo-form'; 
 
@Component({ 
  selector: 'page-tipo-list', 
  templateUrl: 'tipo-list.html' 
}) 

export class TipoList 
{ 
 
  itens = [];  
  
  constructor( 
    public navCtrl: NavController, 
    public tipoData: TipoData) 
    { 
    // Populate tipo 
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
 
  findAll()
  { 
    this.tipoData.findAll().subscribe(tipos => 
    { 
      this.itens = tipos; 
    }); 
  } 

  update(event, item)
  {
    this.navCtrl.push(TipoForm, {tipo: item});
  }

  delete(event, item)
  {
      this.tipoData.delete(item).subscribe( 
        res => {
          this.navCtrl.push(TipoList);
        });
  }
 
  goToCreateType()
  { 
    this.navCtrl.push(TipoForm,{}); 
  } 

  itemSelected(objeto)
  {
      // this.navCtrl.push(TipoDetails, 
      // {
      //   objeto: objeto
      // });
      console.log(objeto);
  }
 
} 