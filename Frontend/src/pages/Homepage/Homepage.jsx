import React from "react";
import "./Homepage.css";
import img from "../../assets/img/bg-image.jpg";
import Plus from "../../utils/svg/Plus";
import PlusGrid from "../../utils/svg/PlusGrid";
import Dot from "../../utils/svg/Dot";
import Number from "../../utils/svg/Number";
const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="herosection-container">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1623780569981-8ecf6b181928?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="overlay">
              <div className="herosection-content">
                <h1 className="herosection-title">Moonlight Express</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="primary">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutsection-container">
          <AboutSection />
        </div>
        <ProductSection />
        <HowToBuy />
        <ContactSection />
      </div>
    </>
  );
};

export default Homepage;

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="path/to/your/image.jpg" alt="Living room" />
        </div>
        <div className="about-text">
          <h1>WE HAVE WHAT YOU NEED</h1>
          <p>
            Moonlight Express crafts exquisite handmade products from metal, wood, glass, and resin, bringing artistry and craftsmanship to every creation. With a dedication to quality and unique designs, we offer a diverse collection that seamlessly blends tradition with modern aesthetics. Explore our curated selection and experience the beauty of handcrafted excellence.
            Let your space shine with Moonlight Express.
          </p>
          <button className="primary">Know more</button>
        </div>
        <PlusGrid bottom={"0"} right={"0"} />
      </div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      link: "https://images.unsplash.com/photo-1672252508024-c80ac06f960c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1527383214149-cb7be04ae387?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1657603513821-399e205022cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1612188842101-f976582906fc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1570569962804-5377da5be035?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1585386931415-464367473a01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1633101635884-93a9992960fa?q=80&w=1393&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1551806235-6692cbfc690b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1604145499880-4842c12ad53f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1622723165944-2130128778d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      link: "https://images.unsplash.com/photo-1536437075651-01d675529a6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="productsection-container">
        <h1>
          <Dot top={"-10px"} left={"-30px"} />
          Our Products
        </h1>
        <div className="productsection">
          {products.map((product, index) => (
            <div key={index} className="product">
              <img src={`${product.link}`} alt="" />
            </div>
          ))}
        </div>
        <button className="primary"><>More Products...</></button>
      </div>
    </>
  );
};

const HowToBuy = () => {
  return (
    <>
      <div className="steps-container">
        <h1 className="relative">How to Buy
          <PlusGrid bottom={"0"} right={"0"} />
        </h1>
        <div className="steps-body">
          <div className="step">
            <p>
              <Number number={1} />
              <i class="action-icon ri-file-search-line"></i>
              Browse the Desired product from our vast range of collection.
            </p>
            <Dot bottom={"5px"} left={"5px"} />
          </div>
          <div className="step">
            <p>
              <Number number={2} />
              <i class="action-icon ri-file-edit-line"></i>
              Fill out neccessary details in the form and get verifried.
            </p>
            <Dot bottom={"5px"} left={"5px"} />
          </div>
          <div className="step">
            <p>
              <Number number={3} />
              <i class="action-icon ri-truck-line"></i>
              Get your product delivered to your destination.
            </p>
            <Dot bottom={"5px"} left={"5px"} />
          </div>
        </div>
      </div>
    </>
  );
};

const ContactSection = () => {
  return (
    <>
      <div className="main_container blur">
        <div className="main_container_left">
          <h1 id="h1First">Contact Us</h1>
          <div className="contact-details">
            <h3>
              <i class="ri-map-pin-add-fill"></i> : Poonam Vihar Colony,
              Khushahlpur, Moradabad
            </h3>
            <h3>
              <i class="ri-phone-fill"></i> : +91-9368460414
            </h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13979.16585450546!2d78.724338344101!3d28.845067958785283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afc1b663a59b3%3A0xd8218768ccfa7e46!2sPoonam%20Vihar%2C%20Khushhalpur%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001!5e0!3m2!1sen!2sin!4v1740319817048!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="main_container_right">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols={20}
            rows={10}
            placeholder="Your Message..."
            defaultValue={""}
          />
          <button className="primary">Submit</button>
        </div>
      </div>
    </>
  );
};
