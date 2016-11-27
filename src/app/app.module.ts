import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';

//IMPORT PAGES HERE
import { Home } from '../pages/home/home';
import { TipoList } from '../pages/tipo-list/tipo-list';
import { TipoForm } from '../pages/tipo-form/tipo-form';
import { TipoComidaList } from '../pages/tipo-comida-list/tipo-comida-list';
import { TipoComidaForm } from '../pages/tipo-comida-form/tipo-comida-form';

//IMPORT PROVIDERS HERE
import { TipoData } from '../providers/tipo-data';
import { TipoComidaData } from '../providers/tipo-comida-data';

@NgModule({
  //ADD PAGES HERE
  declarations: [
    MyApp,
    Home,
    TipoList,
    TipoForm,
    TipoComidaList,
    TipoComidaForm
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //ADD PAGES HERE
  entryComponents: [
    MyApp,
    Home,
    TipoList,
    TipoForm,
    TipoComidaList,
    TipoComidaForm
  ],
  //ADD PROVIDERS HERE
  providers: [TipoData, TipoComidaData]
})
export class AppModule {}
