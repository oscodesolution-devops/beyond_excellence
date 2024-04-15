import React from 'react'
import Card from './Card'
import Defualt from "@/Images/Products/Project.png"
const Deal = () => {
    const data = [
        {
            Id: "A1",
            name: "Laptop",
            price: "1500",
            image: Defualt,
            realPrice: "2500",
            cetegory: "Lamp",

        },
        {
            Id: "A1",
            name: "Laptop",
            price: "1500",
            image: Defualt,
            realPrice: "2500",
            cetegory: "Lamp",

        },
        {
            Id: "A1",
            name: "Laptop",
            price: "1500",
            image: Defualt,
            realPrice: "2500",
            cetegory: "Lamp",

        },
        {
            Id: "A1",
            name: "Laptop",
            price: "1500",
            image: Defualt,
            realPrice: "2500",
            cetegory: "Lamp",

        },
    ]
    return (
        <>
            <section className="px-5 md:px-32 md:gap-0 gap-2 flex flex-row flex-wrap justify-between ">
                {
                    data.map((e) => (
                        <Card key={e.Id} product={e} />
                    ))
                }

            </section>
        </>
    )
}

export default Deal