import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [inquiries, setInquiries] = useState([]);

    const contextValue = {
        allProducts,
        setAllProducts,
        categories, 
        setCategories,
        inquiries,
        setInquiries
    }
    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;