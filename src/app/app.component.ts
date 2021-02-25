import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Stock-Marker';
 public stock: Stock;
 public stockObj:Stock;
 private counter: number = 1;
 ngOnInit(): void {
 this.stock = new Stock('', '', 0, 0, 'NASDAQ');
 }
 onToggleFavorite(stock: Stock) {
 
 this.stock.favorite = !this.stock.favorite;
 }
 changeStockObject() {

 this.stock = new Stock('', '', 0, 0, 'NASDAQ');
 }
 changeStockPrice() {

 this.stock.price += 10;
 }
 testMethod() {
    
     console.log('Test method in AppComponent triggered');
     }
    }
    
