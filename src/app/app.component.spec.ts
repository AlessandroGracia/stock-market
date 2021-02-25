import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'Stock-Market';
 public stock: Stock;
 
 ngOnInit(): void {
 this.stock = new Stock('Stosk-Market', 'TCS', 18, 13, 'NASDAQ');
 }
 onToggleFavorite(stock: Stock) {
 console.log('Favorite for stock ', stock, ' wastriggered');
 this.stock.favorite = !this.stock.favorite;
 }
    }
    