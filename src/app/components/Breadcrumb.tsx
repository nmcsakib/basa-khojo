
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = ({location}: {location: LocationObject}) => {

    return (
        <div className="flex flex-col mt-2">
        
          {location?.division &&   <div className="flex flex-wrap items-center gap-2 bg-white/80 py-5 px-3 rounded-md">
               
                  
                        <ol className="flex items-center flex-wrap md:text-xl">
                            <li className={` text-yellow-700`}>{location?.division}</li>
                            {location?.district && <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>} 
                            <li className={` text-yellow-700`}>{location?.district}</li>
                            {location?.upazila && <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>} 
                            <li className={` text-yellow-700`}>{location?.upazila}</li>
                            {location?.union && <MdKeyboardArrowDown className="rotate-[-90deg] text-green-900 text-3xl font-bold"/>} 
                            <li className={` text-yellow-700`}>{location?.union}</li>
                             
                        </ol>
                 
            </div>}
            {
                location?.university && <div className="flex items-center gap-[5px] bg-[#fffea877] py-5 px-3 rounded-md mt-2">
            <h4 className="text-xl">বিশ্ববিদ্যালয়: <span className="text-indigo-800">{location?.university?.bn_name}</span></h4>
            </div>
            }
        </div>
    );
};

export default Breadcrumb;
                                