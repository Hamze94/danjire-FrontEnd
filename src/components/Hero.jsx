import React from 'react'

export default function Hero() {
    return (
        <div className='relative bg-[url(/hero.jpeg)] sm:min-ph-[25vh] sm:h-[45] sm:max-h-[50vh] bg-cover bg-right bg-no-repeat'>
            <div className="conatainer py-8 sm:py-0 sm:flex justify-between items-center h-full">
                <div className="flex items-center h-full ">
                    <div>
                        <p className=' uppercase text-topHeadingPrimary font-bold'>
                            Shop Our Frechest
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
