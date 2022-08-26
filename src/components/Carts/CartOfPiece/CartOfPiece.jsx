import style from './CartOfPiece.module.css';
import { useSearch } from "../../../context";
// import style from "../Cart.module.css";

const CartOfPiece = props => {
    const data = props.data;
    return(
        <div className={style.cart_piece}>
            <img src={data} alt="" />
        </div>
    )
}

export default CartOfPiece;