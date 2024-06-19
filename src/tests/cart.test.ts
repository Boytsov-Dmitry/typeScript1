import Cart from '../Classes/Cart'
import Movie from '../Classes/Movie'


test('проверка добавления', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 1, 1, 'a', 'a', ['a'], 1));
    const correct = [{
        id: 1,
        name: 'a',
        price: 1,
        year: 1,
        country: 'a',
        tagline: 'a',
        genre: ['a'],
        minutes: 1
    }];
    expect(cart.items).toEqual(correct);
});

test('fullprice', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 1000, 1, 'a', 'a', ['a'], 1));
    expect(cart.fullPrice()).toBe(1000);
});

test('Sum with discount 10% is 3510', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 1000, 1, 'a', 'a', ['a'], 1));
    expect(cart.priceWithDiscount(10)).toBe(900);
});

test('Deleting an element is successful', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 1, 1, 'a', 'a', ['a'], 1));
    cart.add(new Movie(2, 'b', 2, 2, 'b', 'b', ['b'], 2));

    const correct = [{
        id: 1,
        name: 'a',
        price: 1,
        year: 1,
        country: 'a',
        tagline: 'a',
        genre: ['a'],
        minutes: 1
    }];

    cart.deleteById(2);
    
    expect(cart.items).toEqual(correct);
});