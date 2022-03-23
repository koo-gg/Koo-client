import React from 'react';

type HoverProps = {
    menuname: string,
    children : React.ReactNode
};

const Tooltip = ({ children  , menuname  } : HoverProps ) => {
    return (
        <div 
        className='relative'>
                {children}
            <div className="w-max bg-Black rounded p-1.5 px-3.5
            absolute bottom-minus-8 left-1/2 translate-x-minus-2/4
            text-iconHover text-[0.65rem] leading-5 font-bold
            hidden">
            {/*
            + ::before 와 관련된 속성들 + 
            before:block before:absolute before:content-[''] before:w-3 before:h-3 before:bg-red-500 r-0 b-0
            */}
                {menuname}
            </div>
        </div>
    );
};

export default Tooltip;