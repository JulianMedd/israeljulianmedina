import React from 'react'

const LayoutSection = ({children, over=false,title=""}) => {
    return (
        <>
        {over ? 
            (
                <section className="animate-apear h-screen w-screen md:pl-60 md:pt-0">
                    <div className="h-full w-full overflow-hidden flex flex-col justify-between items-center lg:flex-row pt-14">
                        {children}
                    </div>
                </section>
            ):(
                <section className="animate-apear pt-20 w-screen lg:h-full md:pl-60 bg-gray-50 ">
                    <div className="w-full flex flex-col items-center">
                        <h2 className="text-indigo-700 font-thin tracking-widest pb-3 mb-14 text-2xl border-b-4 animate-pulse">
                            {title}
                        </h2>
                        {children}
                    </div>
                </section>
            )}
        </>
    )
}

export default LayoutSection
