import React from 'react';
import Head from 'next/head';

const LayoutSection = ({children, over=false,title=""}) => {
    return (
        <>
        {over ? 
            (
                <div>
                    <Head>
                        <title>Israel Julian Medina</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <section className="animate-apear h-screen w-screen md:pl-60 md:pt-0">
                        <div className="h-full w-full overflow-hidden flex flex-col justify-between items-center lg:flex-row pt-14">
                            {children}
                        </div>
                    </section>
                </div>
            ):(
                <div>
                    <Head>
                        <title>Israel Julian Medina</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <section className="animate-apear pt-20 w-screen lg:h-full md:pl-60 bg-gray-50 ">
                        <div className="w-full flex flex-col items-center">
                            <h2 className="text-indigo-700 font-thin tracking-widest pb-3 mb-14 text-2xl border-b-4 animate-pulse">
                                {title}
                            </h2>
                            {children}
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default LayoutSection
