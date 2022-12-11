import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Favorites from './components/favorites/Favorites';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';

function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function axiosData() {
            const cartData = await axios.get('https://6385fb56beaa6458266f3bb8.mockapi.io/cart');
            /*.then((res) => {setCartItems(res.data);})*/
            const favoriteData = await axios.get('https://6385fb56beaa6458266f3bb8.mockapi.io/favorites');
            /*.then((res) => {setFavoriteItems(res.data);})*/
            const productsData = await axios.get('https://6385fb56beaa6458266f3bb8.mockapi.io/products');
            /*.then((res) => {setProducts(res.data);})*/

            setLoading(false);
            setCartItems(cartData.data);
            setFavoriteItems(favoriteData.data);
            setProducts(productsData.data);
        }
        axiosData()
    }, [])

    const onRemoveCartItem = (id) => {
        axios.delete(`https://6385fb56beaa6458266f3bb8.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
    }

    return (
        <div className="App">
            {cartOpened ? <Cart onRemoveCartItem={onRemoveCartItem} cartItems={cartItems} closeCart={ () => setCartOpened(false) } /> : null}

            <Header openCart ={ () => setCartOpened(true)}
                    cartItems={cartItems}/>
            <Routes>
                <Route path='/favorites' element={
                    <Favorites
                        favoriteItems={favoriteItems}
                        setFavoriteItems={setFavoriteItems}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                }
                />
                <Route path='/' element={
                    <Home
                        items={products}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        setSearch={setSearch}
                        search={search}
                        favoriteItems={favoriteItems}
                        setFavoriteItems={setFavoriteItems}
                        loading={loading}
                    />
                }
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

