import { useSearch } from "../../context";
import css from "./Navbar.module.css";

const Navbar = () => {
    const { input, setInput, bool, setBool } = useSearch();
    return(
        <div className={css.header}>
            <div className={css.header_elements_section}>
                <input type="text" name="" onChange={e => setInput(e.target.value)} value={input} placeholder="search..."/>
                <button className={css.header_search_btn} onClick={() => setBool(!bool)}>Search</button>
            </div>
        </div>
    )
}

export default Navbar;