import React from 'react';

const RoomInput = ({label, type, placeholder, setValue} : {label: string, type: string, placeholder: string, setValue:  React.Dispatch<React.SetStateAction<string>>}) => {
    return (
         <div className="flex flex-col gap-1 text-white">
            <label className="font-medium tracking-wider" htmlFor="offer-price">
            {label}
            </label>
            <input
            onChange={(e) => setValue(e.target.value)}
              type={type}
              maxLength={40}
              placeholder={placeholder}
              className="outline-none md:py-2.5 py-2 px-3 rounded border text-white border-white"
              required
            />
          </div>
    );
};

export default RoomInput;