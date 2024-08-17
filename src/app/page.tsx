"use client";

import { useEffect, useState } from "react";
import Allproducts from "./allproducts";
import Categories from "./categories";
import Myinfo from "./myinfo";
import { ProductItemType } from "./product-type";

const products: ProductItemType[] = [
  {
    id: 1,
    name: 'Iphone 15 Promax',
    price: 2500,
    category: "Phones"
  },
  {
    id: 2,
    name: 'Airpod',
    price: 25,
    category: "Gadgets"
  },
  {
    id: 3,
    name: 'Eid Special Nara J.',
    price: 25,
    category: "Cloths"
  },
  {
    id: 4,
    name: 'Tesla Cybertruck',
    price: 65000,
    category: "Cars"
  },
  {
    id: 5,
    name: 'Macbook',
    price: 2500,
    category: "Computers"
  }
];


export default function Home() {

  const [categlist, setCateglist] = useState(
    ["All", "Cars", "Phones", "Gadgets", "Cloths", "Computers"]
  )

  const [selectedCat, setSelectedCat] = useState("All")

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    console.log('Hello World')
  }, [])

  useEffect(() => {
    console.log("Selected Category is: ", selectedCat)
  }, [selectedCat])

  /* 
  useEffect is effective on three lifecycles of components mount, unmount, and when changes made 
  the array in useEffect is for the dependencies
  */  
/* 
  useEffect(() => {
    let shortListedProducts= [];
    if (selectedCat !== "All") {

      for (let i = 0; i < products.length; i++) {
  
        if (selectedCat === products[i].category) {
        shortListedProducts.push(products[i])
          
        }
      } 

    } else {
      shortListedProducts.push(...products)
    }

    setFilteredProducts(shortListedProducts)
  }, [selectedCat]) */

  useEffect(() => {
      let shortProducts = products.filter(({category})=> (
        selectedCat === "All" || selectedCat === category
    ));

    setFilteredProducts(shortProducts)
}, [selectedCat])

  return (
    <>
      <Myinfo />

      <Categories categories={categlist} setSelectedCat={setSelectedCat} />

      <Allproducts productList={filteredProducts} />

    </>
  )
}


