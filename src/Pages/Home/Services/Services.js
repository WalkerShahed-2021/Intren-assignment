import React from 'react';
import './Services.css'
import icon from '../../../assets/images/Vector.png'
import Service from './Service/Service';


const Services = () => {
    const Ourservices = [
        {name: 'Cardiology', id: 1, pragrap:'Seduahag perspiciati under omnised atused error.', btn: 'Explore Now', logo: icon},
        {name: 'Cardiology', id: 2, pragrap:'Seduahag perspiciati under omnised atused error.', btn: 'Explore Now', logo: icon},
        {name: 'Cardiology', id: 3, pragrap:'Seduahag perspiciati under omnised atused error.', btn: 'Explore Now', logo: icon},
        {name: 'Cardiology', id: 4, pragrap:'Seduahag perspiciati under omnised atused error.', btn: 'Explore Now', logo: icon},
    ]
    return (
        <div className='containers'>
            <div className='mt-14'>
                <p className='text-[#642DFF] text-center'>Our Services</p>
                <h1 className='services'>Services For Our Health</h1>
            </div>
             <div className='flex gap-10 mt-14'>
                    {
                        Ourservices.map(cart =>
                        <Service
                            key={cart.id}
                            cart={cart}
                        ></Service>
                        )
                    }
              </div>
        </div>
    );
};

export default Services;