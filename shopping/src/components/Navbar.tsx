"use client"
import React from 'react'

const Navbar = () => {
    const [menu, setmenu] = React.useState(false);
    const [visibility, setVisibility] = React.useState<{
        [key: string]: boolean;
    }>({
        element1: false,
        element2: false,
        element3: false,
        // Add more elements if needed
    });

    const [hoverState, setHoverState] = React.useState<{
        [key: string]: boolean;
    }>({
        element1: false,
        element2: false,
        element3: false,
        // Add more elements if needed
    });

    const toggleVisibility = (element: string) => {
        const updatedVisibility = { ...visibility };
        updatedVisibility[element] = !visibility[element];
        setVisibility(updatedVisibility);
    };

    const handleHover = (element: string, isHovering: boolean) => {
        setHoverState({
            ...hoverState,
            [element]: isHovering
        });
        if (!isHovering) {
            setVisibility({
                ...visibility,
                [element]: false
            });
        }
    };

    const handleSubmenuClick = (element: string) => {
        setHoverState({
            ...hoverState,
            [element]: false
        });
    };


    console.log(visibility.element1);
    return (
        <>
            <div className="hidden md:block">
                <div className="flex items-center gap-4 justify-center w-full border-b border-black">
                    <a className="flex items-center h-16 mr-8" href="#">Menu Item 1</a>
                    <a className="flex items-center h-16 mr-8" href="#">Menu Item 2</a>

                    {/* <!-- Component Start --> */}
                    <button className="relative flex flex-col items-center group focus:outline-none">
                        <div
                            onMouseEnter={() => handleHover('element1', true)}
                            onMouseLeave={() => handleHover('element1', false)}
                            onClick={() => toggleVisibility('element1')}
                            className="flex items-center h-16">
                            Mega Menu
                            <svg className="w-4 h-4 mt-px ml-1"

                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        {hoverState.element1 &&
                            <div onMouseEnter={() => handleHover('element1', true)}
                                onMouseLeave={() => handleHover('element1', false)} className={`absolute top-0 bg-[#fff]  w-screen max-w-3xl mt-16 bg-white border border-black shadow-lg group-focus:visible`}>
                                <div className="grid grid-cols-2 gap-10 p-8 ">
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex items-center justify-between col-span-2 px-8 py-4 border-t border-black">
                                    <div className="flex flex-col">
                                        <span className="text-left font-medium leading-none">Heading</span>
                                        <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </div>
                                    <a href="#" className="flex items-center h-10 px-3 bg-gray-200 ">Button</a>
                                </div>
                            </div>
                        }
                    </button>
                    <button className="relative flex flex-col items-center group focus:outline-none">
                        <div
                            onMouseEnter={() => handleHover('element2', true)}
                            onMouseLeave={() => handleHover('element2', false)}
                            onClick={() => toggleVisibility('element2')}
                            className="flex items-center h-16">
                            Mega Menu
                            <svg className="w-4 h-4 mt-px ml-1"

                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        {hoverState.element2 &&
                            <div onMouseEnter={() => handleHover('element2', true)}
                                onMouseLeave={() => handleHover('element2', false)} className={`absolute top-0    w-screen max-w-3xl mt-16 bg-white border border-black shadow-lg group-focus:visible`}>
                                <div className="grid grid-cols-2 gap-10 p-8">
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                    <a className="flex" href="#">
                                        <span className="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                                        <div className="flex flex-col ml-4">
                                            <span className="text-left font-medium leading-none">Heading</span>
                                            <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex items-center justify-between col-span-2 px-8 py-4 border-t border-black">
                                    <div className="flex flex-col">
                                        <span className="text-left font-medium leading-none">Heading</span>
                                        <span className="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </div>
                                    <a href="#" className="flex items-center h-10 px-3 bg-gray-200 ">Button</a>
                                </div>
                            </div>
                        }
                    </button>
                    {/* <!-- Component End --> */}
                </div>
            </div>


        </>
    )
}

export default Navbar