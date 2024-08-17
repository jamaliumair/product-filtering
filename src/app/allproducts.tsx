import { ProductItemType } from "./product-type";
import Products from "./products";

type ProductListType = {
    productList: ProductItemType[]
} 

export default function Allproducts({productList}: ProductListType) {
    return (
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <thead>
            <tr style={{ padding: "1px solid black" }}>
                <th style={{ border: "1px solid black", padding: "10px" }}>SR</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Product Name</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Price</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Category</th>
            </tr>
            </thead>

            {
                productList.map(( { id,name,price, category }, index ) => (
                    <Products 
                    key={name + id}
                    id={index + 1}
                    name={name}
                    price={price}
                    category={category}
                    />
                ))
            }

            {/* <Products />
            <Products />
            <Products /> */}
        </table>
    )
}