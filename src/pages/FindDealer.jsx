import React from 'react'
import FindDealerGoogleMap from '../components/FindDealer/FindDealerGoogle.Map'

import DealerOne from "../assets/images/FindDealer/Image-01.png"
import DealerTwo from "../assets/images/FindDealer/Image-02.png"
import { allDeviceMaxWidth } from '../styles/maxWidth'

const FindDealer = () => {
    return (
        <div>
            <section>
                <FindDealerGoogleMap />
            </section>
            <section className={allDeviceMaxWidth}>
                <div className='max-w-7xl mx-auto my-10'>
                    <h1 className='text-sky-700 font-normal text-3xl'>Search Results</h1>
                    <p className='text-sky-700 font-light text-lg'>02 Dealers founded</p>
                    <p className='border border-primary mt-8'></p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 pt-4 gap-4 pb-8'>
                        <div className='mt-14 border-2 border-sky-700 p-8'>
                            <h1 className='text-sky-700 font-bold text-lg'>Dealer Name: New Saika Motors</h1>
                            <h2 className='text-sky-700 font-normal text-lg'>Address : Hazi Kalu Miah Market, C & B Road, Narsingdi.</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Proprietor Name:</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Phone: 017116-21552, 01717-156527</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Email:</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Locate on map</h2>
                        </div>
                        <div>
                            <h1 className='text-sky-700 font-bold text-lg pb-7'>Dealer Network:</h1>
                            <img src={DealerOne} alt="dealer" />
                        </div>
                        <div className='mt-14'>
                            <h1 className='text-sky-700 font-bold text-lg'>Dealer Name: : Elham Enterprise</h1>
                            <h2 className='text-sky-700 font-normal text-lg'>Address : Raja Complex Shahporan Road Sylhet.</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Proprietor Name:</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Phone: 01733-391618, 01719-147847</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Email:</h2>
                            <h2 className='text-sky-700 font-normal text-lg'>Locate on map</h2>
                        </div>
                        <div>
                            <h1 className='text-sky-700 font-bold text-lg pb-7'>Dealer Network:</h1>
                            <img src={DealerTwo} alt="dealer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FindDealer