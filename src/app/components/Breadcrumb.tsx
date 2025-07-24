
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = () => {

    const breadcrumbItems = [
        {
            label: "Dhaka"
        },
        {
            label: "Tangail"
        },
        {
            label: "Tangail Sodor"
        },
        {
            label: "Santhos"
        },

    ]

    return (
        <div className="flex flex-col">
        
            <ol className="flex items-center gap-[5px] bg-[#e6a8ff77] py-5 px-3 rounded-md">
                {
                    breadcrumbItems?.map((item, index) => (
                        <>
                            <li key={index}
                                className={`text-[0.9rem] text-yellow-700 ${index === breadcrumbItems.length - 1 && "font-bold"}`}>{item.label}</li>
                            {
                                index !== breadcrumbItems.length - 1 && (
                                    <MdKeyboardArrowDown
                                        className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>
                                )
                            }
                        </>
                    ))
                }
            </ol>
            <div className="flex items-center gap-[5px] bg-[#e6a8ff77] py-5 px-3 rounded-md mt-2">
            <h4 className="text-xl">Near : <span className="text-red-500">Mawlana Bhasani Science and Technology University</span></h4>
            </div>
        </div>
    );
};

export default Breadcrumb;
                                