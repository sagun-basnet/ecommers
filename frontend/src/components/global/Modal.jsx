import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/50" : "invisible"}
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={
                    `bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"} flex flex-col justify-center items-center gap-4
                `}
            >
                <button onClick={onClose} className='absolute top-1 right-1 p-1 rounded-lg text-red-600 bg-white hover:bg-red-600 hover:text-gray-50 my-transition'>
                    <IoMdClose />
                </button>
                {children}

            </div>
        </div>
    )
}

export default Modal




