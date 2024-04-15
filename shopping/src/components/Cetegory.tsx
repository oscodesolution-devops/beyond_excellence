import React from 'react'
import ProductCard from './ProductCard'
import Defualt from "@/Images/Products/defult.jpg"

const Cetegory = () => {
    const product = [
        {
            name: "Lamp With Shade Wooden",
            img: Defualt,
            link: "/"
        },
        {
            name: "Lamp With Shade Iron",
            img: Defualt,
            link: "/"
        },
        {
            name: "Hanging Lights ",
            img: Defualt,
            link: "/"
        },
        {
            name: "Perfect Table lamp",
            img: Defualt,
            link: "/"
        },
        {
            name: "Table Lamp",
            img: Defualt,
            link: "/"
        },
        {
            name: "Table Lamp",
            img: Defualt,
            link: "/"
        },
    ]
    return (
        <>
            <section className='flex gap-y-6  flex-wrap  items-center justify-between px-6 md:px-32  py-12 '>
                {product.map((item) => (
                    <ProductCard key={item.name} item={item} />
                ))}

            </section>

        </>
    )
}

export default Cetegory