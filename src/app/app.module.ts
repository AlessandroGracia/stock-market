import { BrowserModule } from '@angular/platform-browser';
2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
@NgModule({
 declarations: [
 AppComponent,
 StockItemComponent
 ],
 imports: [
 BrowserModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }