// Home.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer'; // Import the Footer component

const Home = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    let currentIndex = useRef(0);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const images = scrollContainer.querySelectorAll('.image');
        const totalImages = images.length;

        const interval = setInterval(() => {
            currentIndex.current++;
            if (currentIndex.current >= totalImages) {
                currentIndex.current = 0;
            }
            scrollContainer.scrollTo({
                left: currentIndex.current * window.innerWidth,
                behavior: 'smooth'
            });
        }, 3000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='pagechange'>
            <div className='offtag'>
                <p><i className="fa-solid fa-bag-shopping"></i> Use Code HAM10 - Addn. 10% off on cart above Rs4499/- SHOP NOW!!</p>
            </div>
            <div className="scroll" ref={scrollContainerRef}>
                <img className="image" src="https://i.ytimg.com/vi/Nq8V6Qu7fkU/maxresdefault.jpg" alt="not found"></img>
                <img className="image" src="https://media.istockphoto.com/id/1322274556/photo/collection-of-different-toys-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DrcAYB7zglqgD3GuICJFLuxE9cBOvSJIlFAdOwrYZEE=" alt="not found"></img>
                <img className="image" src="https://attractionsmagazine.com/wp-content/uploads/2023/06/barbie-collection-mattel-scaled.jpg" alt="not found"></img>
                <img className="image" src="https://static.independent.co.uk/2023/05/31/14/best%20outdoor%20toys%20and%20games2%20copy.jpg" alt="not found"></img>
                <img className="image" src="https://img.freepik.com/premium-photo/many-soft-toys-are-sitting-background-white-wall_326533-1863.jpg" alt="not found"></img>
                <img className="image" src="https://5.imimg.com/data5/SELLER/Default/2021/2/HW/FJ/PB/49845504/house-building-puzzle-toy-set.jpeg" alt="not found"></img>
                <img className="image" src="https://www.woodenearth.com/cdn/shop/articles/toys-from-oak_1024x1024.png?v=1688291862" alt="not found"></img>
                <img className="image" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/10/hot-wheels-unleashed-15-best-cars-ranked.jpg" alt="not found"></img>
            </div>

            <div className='backyard'>
                <div className='backtext'>
                    <p className='text1'>CREATE YOUR OWN</p>
                    <p className='text2'>BACKYARD </p>
                    <p className='text3'>OLYMPICS</p>
                    <p className='text4'> Play as Team USA in the backyard with </p>
                    <p className='text5'>outdoor toys!</p>
                    <button className="backbutton" type="submit"  onClick={() => navigate('/Outdoor')}>Shop Outdoor Play</button>
                </div>

                <div className='backimg'>
                    <img src="https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2023/09/outdoor-games-for-kids.jpg" alt="not found"></img>
                </div>
            </div>

            <Footer /> {/* Include the Footer component */}
        </div>
    );
};

export default Home;
