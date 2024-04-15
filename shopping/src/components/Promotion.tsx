import React from 'react'
import PromotionCard from './PromotionCard'
import Defualt from "@/Images/Products/photo.jpg"
const Promotion = () => {
    const data = [
        {
            img: Defualt,
            link: "/",
            name: "first"
        },
        {
            img: Defualt,
            link: "/",
            name: "first"
        },
        {
            img: Defualt,
            link: "/",
            name: "first"
        },
        {
            img: Defualt,
            link: "/",
            name: "first"
        },
    ]
    return (
        <>
            <section className="px-6 sm:px-6 md:px-32 md:py-10 gap-1 gap-y-0 flex flex-row flex-wrap justify-center md:justify-between items-center">
                {data.map((e) => (
                    <PromotionCard key={e.name} data={e} />
                ))}

            </section>
        </>
    )
}

export default Promotion