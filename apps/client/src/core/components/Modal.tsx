import { FC, ReactNode, useState } from "react";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon.js";

type IModalProps = {
    children: ReactNode;
    closeModal: () => any;
    isvisible: boolean;
};
export const Modal: FC<IModalProps> = ({ children , closeModal , isvisible} ) => {
    if(!isvisible) return null;
    const hoverClass =
    "transition ease-in-out delay-50 duration-150 hover:scale-150";

    return(
        <div className = "fixed inset-0 flex justify-center items-center ">
            <div className="w-[600px] flex flex-col bg-white rounded shadow-lg p-3">
                <button className = "text-xl place-self-end" onClick={() => closeModal()}>
                <XMarkIcon
                    className={`h-8 w-8 ${hoverClass}`}
                />
                </button>
                <div className = "overflow-y-auto">
                    { children }
                </div>
            </div>
        </div>
        
    ); 
};

