import Buyable from './Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    };

    get items(): Buyable[] {
        return [...this._items]; 
    };

    fullPrice(): number {
        return this._items.reduce((accumulator: number, currentValue: Buyable) => accumulator + currentValue.price, 0);
    };

    priceWithDiscount(discount: number): number {
        return this._items.reduce((accumulator: number, currentValue: Buyable) => accumulator + currentValue.price, 0) * (1 - discount / 100);
    };

    deleteById(id : number) : void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    };
};
