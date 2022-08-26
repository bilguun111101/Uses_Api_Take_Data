import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const Search = createContext();

export const SearchProvider = props => {
    const { children } = props;
    const [input, setInput] = useState("");
    const [bool, setBool] = useState(false);
    const [loading, setLoading] = useState(false)
    return(
        <Search.Provider value={{ input, setInput, bool, setBool, loading, setLoading }}>
            {children}
        </Search.Provider>
    )
}

export const useSearch = () => useContext(Search);