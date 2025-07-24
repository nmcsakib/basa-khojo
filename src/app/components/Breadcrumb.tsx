
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
        <div className="flex flex-col gap-[10px] pt-5">
        
            <ol className="flex items-center gap-[5px] bg-green-100 py-5 px-3 rounded-md">
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
        </div>
    );
};

export default Breadcrumb;
                                