import React from 'react';

const RoomInput = ({label, type, placeholder, setValue} : {label: string, type: string, placeholder: string, setValue:  React.Dispatch<React.SetStateAction<string>>}) => {
    return (
         <div className="flex flex-col gap-1 ">
            <label className="text-base font-medium" htmlFor="offer-price">
            {label}
            </label>
            <input
            onChange={(e) => setValue(e.target.value)}
              type={type}
              placeholder={placeholder}
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
    );
};

export default RoomInput;