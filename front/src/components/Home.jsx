import Banner from "./banner/Banner";
import TextSection from "./textSection/TextSection";
import Products from "./products/product/Products";

const Home = (props) => {
    return(
        <>
            <Banner />
            <TextSection />
            <Products
                items={props.items}
                cartItems={props.cartItems}
                setCartItems={props.setCartItems}
                setSearch={props.setSearch}
                search={props.search}
                favoriteItems={props.favoriteItems}
                setFavoriteItems={props.setFavoriteItems}
                loading={props.loading}
            />
        </>
    )
}
export default Home;