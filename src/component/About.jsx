import React from "react";
import "../css/About.css"; 
import rockinghorse from "../Image/rocking-horse.png";
import vehi from "../Image/vehicle.png";
import branded from "../Image/vehicle (1).png";
import character from "../Image/toy.png";
import gift from "../Image/giftbox.png";
import fest from "../Image/gift.png";

const About = () => {
    const testimonials = [
        { id: 1, text: "This toy store has the best selection of toys. My kids love everything we've bought!", name: "John Doe" },
        { id: 2, text: "Great quality and variety. We always find something new and exciting here.", name: "Jane Smith" },
        { id: 3, text: "Amazing customer service and fantastic toys. Highly recommend!", name: "Emily Johnson" },
    ];

    return (
        <div className="allabout">
            <div className="boxes">
                <div className="box2">
                    <div className="box2text">
                        <h2><span>What makes<br/> our Toy Store <br/>Special!</span></h2>
                    </div>
                </div>
                <div className="box1">
                    <h4>We offer a wide variety of toys for all ages, including:</h4>
                    <h2>Wooden toys</h2> 
                    <img className="im1" src={rockinghorse} alt="not found"></img>
                    <h2>Plastic toys</h2> 
                    <img className="im2" src={vehi} alt="not found"></img>
                    <h2>Branded toys</h2> 
                    <img className="im3" src={branded} alt="not found"></img>
                    <h2>All Character toys</h2> 
                    <img className="im4" src={character} alt="not found"></img>
                    <h2>Birthday gifts</h2> 
                    <img className="im5" src={gift} alt="not found"></img>
                    <h2>Festival gifts</h2> 
                    <img className="im6" src={fest} alt="not found"></img>
                </div>
                <div className="box3">
                    <h2>Our Mission</h2>
                    <p>Our mission is to inspire imagination and learning through play.<br></br> We believe that toys are not just objects, but tools that help children explore the world around them, develop new skills, and create lasting memories.</p>
                </div>
                <div className="box4">
                    <h2>Our Values</h2>
                    <h4><i className="fa fa-star"></i>Quality</h4>
                    <h4><i className="fa fa-star"></i> Innovation</h4>
                    <h4><i className="fa fa-star"></i> Customer Satisfaction</h4>
                    <h4><i className="fa fa-star"></i> Community</h4>
                </div>
                <div className="box5">
                    <h2>Customer Testimonials</h2>
                    <div className="testimonials">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-box">
                                <p>{testimonial.text}</p>
                                <h3>{testimonial.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
