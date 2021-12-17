import React from 'react'

const LayoutSection = ({children, over=false,title=""}) => {
    return (
        <>
        {over ? 
            (
                <section className="animate-apear h-screen pt-14 w-screen md:pl-60 md:pt-0">
                    <div className="h-full w-full overflow-hidden flex flex-col items-center lg:flex-row">
                        {children}
                    </div>
                </section>
            ):(
                <section className="animate-apear pt-20 w-screen lg:h-full md:pl-60">
                    <div className="flex flex-col items-center lg:h-4/5">
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
