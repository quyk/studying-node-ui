import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';

//IMPORT PAGES HERE
import { Home } from '../pages/home/home';
import { TipoList } from '../pages/tipo-list/tipo-list';
import { TipoForm } from '../pages/tipo-form/tipo-form';

//IMPORT PROVIDERS HERE
import { TipoData } from '../providers/tipo-data';


@NgModule({
  //ADD PAGES HERE
  declarations: [
    MyApp,
    Home,
    TipoList,
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
  ],
  //ADD PROVIDERS HERE
  providers: [TipoData]
})
export class AppModule {}
