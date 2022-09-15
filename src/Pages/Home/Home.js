import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Expriences from './Expriences/Expriences';
import FAQQuestions from './FAQQuestions/FAQQuestions';
import Hospital from './Hospital/Hospital';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <Expriences></Expriences>
            <Hospital></Hospital>
            <FAQQuestions></FAQQuestions>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;