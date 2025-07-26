
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
        
            <div className="flex flex-wrap items-center gap-2 bg-white/80 py-5 px-3 rounded-md">
                {
                    breadcrumbItems?.map((item, index) => (
                        <ol  key={index} className="flex items-center">
                            <li
                                className={` text-yellow-700 ${index === breadcrumbItems.length - 1 && "font-bold"}`}>{item.label}</li>
                            {
                                index !== breadcrumbItems.length - 1 && (
                                    <MdKeyboardArrowDown
                                        className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>
                                )
                            }
                        </ol>
                    ))
                }
            </div>
            <div className="flex items-center gap-[5px] bg-[#fffea877] py-5 px-3 rounded-md mt-2">
            <h4 className="text-xl">Near : <span className="text-indigo-800">Mawlana Bhasani Science and Technology University</span></h4>
            </div>
        </div>
    );
};

export default Breadcrumb;
                                