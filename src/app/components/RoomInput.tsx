import React from 'react';

const RoomInput = ({label, type, placeholder, setValue, value} : {label: string, type: string, placeholder: string, setValue:  (val: string) => void, value: string}) => {
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
              value={value}
            />
          </div>
    );
};

export default RoomInput;