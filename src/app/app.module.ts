import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
import { PageNotFoundComponent } from  './NotFound.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'Product', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule ({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
