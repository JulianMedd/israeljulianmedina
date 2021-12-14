import React from 'react'

const LayoutSection = ({children, over=false}) => {
    return (
        <>
        {over ? 
            (
                <section className="animate-apear pt-14 w-screen flex flex-col items-center lg:flex-row md:pl-60 md:pt-0">
                <div className="h-screen w-full overflow-hidden flex flex-col items-center lg:flex-row md:pt-0">
                {children}
                </div>
                </section>
            ):(
                <section className="animate-apear pt-14 w-screen flex flex-col items-center lg:h-screen lg:flex-row md:pl-60 md:pt-0">
                
                {children}
                
                </section>
            )}
        </>
    )
}

export default LayoutSection
