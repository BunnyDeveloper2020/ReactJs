import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import banner from "./banner.jpg";

function Home() {
  return (
    <div className="home">
      <Link to="/">
        <img className="home__img" src={banner} alt="banner img" />
      </Link>

      {/* Product */}
      {/* Product requirement: Product id, Product title, Price, Rating, Product image */}
      <div className="home__row">
        <Product
          id="1231212"
          title="LG 284 L 3 Star Inverter Frost-Free Double-Door Refrigerator (GL-T302RASN, Amber Steel)"
          price={200}
          rating={3}
          image="https://m.media-amazon.com/images/I/311WhwWB+1L._AC_SY480_.jpg"
        />
        <Product
          id="2231212"
          title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
          price={450}
          rating={4}
          image="data:image/webp;base64,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"
        />
        <Product
          id="3331212"
          title="M.G.R.J® Soft & Flexible Silicone Case Cover for Redmi Airdots (White)"
          price={40}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/21kmJs-BNIL.jpg"
        />
        <Product
          id="4131212"
          title="Microsoft Xbox One Wireless Controller (Red)"
          price={65}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/616t-q6o4JL._SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="5131212"
          title="Need for Speed Heat (Xbox One)"
          price={48}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81RAC9ThTrL._SL1500_.jpg"
        />
        <Product
          id="6231212"
          title="The Win Without Pitching Manifesto by Blair Enns"
          price={60}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/312o+J+HPTL._SX331_BO1,204,203,200_.jpg"
        />
        <Product
          id="7331212"
          title="LG 284 L 3 Star Inverter Frost-Free Double-Door Refrigerator (GL-T302RASN, Amber Steel)"
          price={200}
          rating={5}
          image="https://m.media-amazon.com/images/I/311WhwWB+1L._AC_SY480_.jpg"
        />
        <Product
          id="8431212"
          title="The Psychology of Graphic Design Pricing: Price creative work with confidence."
          price={10}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41fBz4Qy-UL._SX331_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9131212"
          title="Samsung LC49HG90DMUXEN 49' Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB"
          price={1300}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="10131212"
          title="Need for Speed Heat (Xbox One)"
          price={48}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81RAC9ThTrL._SL1500_.jpg"
        />
        <Product
          id="11231212"
          title="LG 284 L 3 Star Inverter Frost-Free Double-Door Refrigerator (GL-T302RASN, Amber Steel)"
          price={240}
          rating={2}
          image="https://m.media-amazon.com/images/I/311WhwWB+1L._AC_SY480_.jpg"
        />
        <Product
          id="12331212"
          title="AMD Ryzen 9 3950X Processor (16C/32T, 72 MB Cache, 4.7 GHz Max Boost)"
          price={600}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61LQ1nNL-eL._AC_SL1198_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
