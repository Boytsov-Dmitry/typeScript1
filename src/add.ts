import Cart from './Classes/Cart';
import Movie from './Classes/Movie';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Movie(1009, 'Мстители', 1000, 2012, 'США', 'Avengers Assemble!', ['фантастика'], 137));

// console.log(cart.items[0]);