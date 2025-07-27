
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";
interface LocationObject {
  division?: string;
  district?: string;
  upazila?: string;
  union?: string;
  university?: {
    
    "id": string,
    "bn_name": string,
    "en_name": string,
    "short_form": string,
    "district": string
    };
}
const Breadcrumb = ({location}: {location: LocationObject}) => {

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
               
                  
                        <ol className="flex items-center flex-wrap">
                            <li className={` text-yellow-700`}>{location?.division}</li>
                             <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>
                            <li className={` text-yellow-700`}>{location?.district}</li>
                             <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>
                            <li className={` text-yellow-700`}>{location?.upazila}</li>
                             <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>
                            <li className={` text-yellow-700`}>{location?.union}</li>
                             
                        </ol>
                 
            </div>
            <div className="flex items-center gap-[5px] bg-[#fffea877] py-5 px-3 rounded-md mt-2">
            <h4 className="text-xl">বিশ্ববিদ্যালয়: <span className="text-indigo-800">{lo}</span></h4>
            </div>
        </div>
    );
};

export default Breadcrumb;
                                