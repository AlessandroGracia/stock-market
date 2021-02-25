export class Stock {
    favorite = false;
   constructor(public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string) {}
    public exchanges = ['NYSE', 'NASDAQ', 'OTHER',];
    isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
    }
   }
   
   