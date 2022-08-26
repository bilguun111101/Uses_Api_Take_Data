import { useEffect } from 'react';
import { useState } from 'react';
import { useSearch } from '../../context';
import style from './Cart.module.css';
import CartOfPiece from './CartOfPiece/CartOfPiece';
const axios = require('axios');

const Cart = () => {
    const { input, setInput, bool, loading, setLoading } = useSearch();
    const [array, setArray] = useState([]);
    const imformation = async() => {
        try{
            const search = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=sfJoNIbYEOS4pmyNpQe5lT4FkLd6xmAg&q=${input}&limit=30`)
            setArray(search.data.data);
            console.log(array);
        } catch(err) {console.log(err)};
    }

    useEffect(() => {
        imformation()
    }, [bool])
    return(
        <div className={style.cart_section}>
            <div className={style.cart_section_bottle}>
                {array.map((el, index) => <CartOfPiece key={index} data={el.images.original.url} />)}
            </div>
        </div>
    )
}

export default Cart;