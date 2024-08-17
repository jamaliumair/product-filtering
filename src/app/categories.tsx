"use client";

type CategoryType = {
    categories: string[];
    setSelectedCat: (cat: string) => void
}

export default function Categories({categories, setSelectedCat}: CategoryType) {

    // const PrintHandler = (categoryName: string) => {

    //     console.log(categoryName)
    
    // }

    return (
        <>
        {
            categories.map((category, i) => (
        <button key={category + i} onClick={() => { setSelectedCat(category) }}>{category}</button>
            ))
        }

        {/* <button onClick={() => { PrintHandler("Cars") }}>{category[0]}</button>
        <button onClick={() => { PrintHandler("Mpbile Phones") }}>{category[1]}</button>
        <button onClick={() => { PrintHandler("Clothing") }}>{category[2]}</button>
        <button onClick={() => { PrintHandler("Home Decor") }}>{category[3]}</button> */}
        </>
    )
}

