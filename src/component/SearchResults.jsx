import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../actions/wishlistActions';
import { useAuth } from './AuthContext';
import CartContext from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import '../css/SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items || []);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = () => {
      // Hardcoded items
      const allItems = [
        { id: 1, category: '0-2 Years', image: 'https://images-cdn.ubuy.co.in/6437ffa14073cb64e44d51d3-montessori-pull-string-toys-for-babies.jpg', name: 'Montessori Toy', price: '₹1800' },
        { id: 2, category: '0-2 Years', image: 'https://quasarworld.in/wp-content/uploads/2021/06/41nAOBwaLGL.jpg', name: 'Wooden Number Train', price: '₹2200' },
        { id: 3, category: '0-2 Years', image: 'https://m.media-amazon.com/images/I/51lbyZ4stGL.jpg', name: 'ABC Pyramid', price: '₹3500' },
        { id: 4, category: '0-2 Years', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/crib-toy-play-gym/3/h/k/6-baby-play-gym-mat-and-play-piano-for-kids-0-2-years-lights-original-imah2heza5hcwguy.jpeg?q=20&crop=false', name: 'Piano Baby Gym', price: '₹5100' },
        { id: 5, category: '3-8 Years', image: 'https://images-cdn.ubuy.ae/655950d01f86fd7a13704114-games-for-4-5-6-7-year-olds-boys-girls.jpg', name: 'Tetra Tower', price: '₹2500' },
        { id: 6, category: '3-8 Years', image: 'https://m.media-amazon.com/images/I/61mNsbu-zsL.jpg', name: 'Art and Craft Kit', price: '₹5000' },
        { id: 7, category: '3-8 Years', image: 'https://samstoy.in/cdn/shop/files/Buy-Childrens-Electric-Motorcycle-Tricycle-Can-Sit-In-Baby-Toy-bike-Battery-1-3-5-6-12-Years-Old-Trikes-Ride-on-Toys-in-Ahmedabad-samstoy-in-near-me-in-Ahmedaba-4969_1445x.jpg?v=1705215305', name: 'Harley Electric Bike', price: '₹7500' },
        { id: 8, category: '3-8 Years', image: 'https://m.media-amazon.com/images/I/61CBvC7qbzL._AC_UF1000,1000_QL80_.jpg', name: 'Kizmos 250 Pieces', price: '₹900' },
        { id: 9, category: '9-15 Years', image: 'https://m.media-amazon.com/images/I/81G6eCvtGBL.jpg', name: 'Junior Engineer', price: '₹3000' },
        { id: 10, category: '9-15 Years', image: 'https://nationaltoday.com/wp-content/uploads/2022/10/Laser-Tag-Guns-with-Vests-Set-of-4-500x390.png', name: 'Armo Recharge Guns', price: '₹1100' },
        { id: 11, category: '9-15 Years', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvKjs5jaoRKRNtDrPDUeqh0wzlneBQGu9Ag&usqp=CAU', name: 'DIY Guitar', price: '₹1000' },
        { id: 12, category: '9-15 Years', image: 'https://jaimantoys.com/wp-content/uploads/2023/05/1-6.jpg', name: 'Math Kit', price: '₹1200' },
        { id: 13,brand: "LEGO", image: "https://assets.ajio.com/medias/sys_master/root/20230516/I43a/6463b35842f9e729d78d85da/-473Wx593H-4931763560-multi-MODEL.jpg", name: "City Recycling Truck",price: '₹4000'},
        {id: 14,brand: "LEGO",image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664529/665/493664529-1_2804.webp", name: "Iron Man",price: '₹2200'},
        { id: 15,brand: "LEGO",image: "https://assets.ajio.com/medias/sys_master/root/20230516/qM3D/6463a0acd55b7d0c63b99d88/-473Wx593H-4931763500-multi-MODEL.jpg", name: "City Fire Station",price: '₹3500'},
        {id: 16,brand: "LEGO",image: "https://www.lego.com/cdn/cs/set/assets/blt78b39f5757ec88eb/40649_alt1.png", name: "Minifigures", price: '₹5100'},
        {id: 17, brand: "Hasbro",image: "https://m.media-amazon.com/images/I/71yli+JLbBL._AC_UF1000,1000_QL80_.jpg",name: "Marvel Titan Hero",price: '₹1800'},
        { id: 18, brand: "Hasbro",image: "https://samstoy.in/cdn/shop/files/Buy-Hasbro-Genuine-Transformers-Toys-Bumblebee-Autobot-Action-Figure-Deformation-Robot-Toys-For-Boys-Kids-Birthday-Gift-samstoy-in-near-me-in-Ahmedabad-gujarat-7274.jpg?v=1705215764", name: "Transformer",price: '₹2200'},
        { id: 19,brand: "Hasbro",image: "https://www.juguetesdondino.com/media/catalog/product/cache/1/image/1e4fa0ea24d73fd1dac74155b48018b7/h/a/has07572.jpg", name: "The Hulk",price: '₹3500'},
        { id: 20,brand: "Hasbro", image: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1601343360963-RDWFRBAQNC0CAQRGQOGM/image-asset.jpeg", name: "ZOID Dragon",price: '₹5100'},
        { id: 21,brand: "Hot Wheels",image: "https://images-cdn.ubuy.co.in/66051b9028db312096719998-power-wheels-hot-wheels-racer.jpg",name: "Racer Ride Car",price: '₹1800'},
        {id: 22,brand: "Hot Wheels",image: "https://m.media-amazon.com/images/I/71QrxsyjtwL.jpg",name: "Car Track Set",price: '₹2200'},
        {id: 23,brand: "Hot Wheels",image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395251_sd.jpg", name: "Character Car",price: '₹3500'},
        { id: 24, brand: "Hot Wheels", image: "https://m.media-amazon.com/images/I/714zsiETJyL._AC_UF1000,1000_QL80_.jpg",name: "Monster Trucks",price: '₹5100'},
        { id: 25,  brand: "Spiderman",image: "https://m.media-amazon.com/images/I/710Wh-nh7aL._AC_UF1000,1000_QL80_.jpg", name: "SpiderMan Homecoming",price: '₹1800'},
        {id: 26, brand: "Spiderman",image: "https://m.media-amazon.com/images/I/71jqWFd-orL._AC_UF1000,1000_QL80_.jpg", name: "Spider Remote Control Car",price: '₹2200'},
        {id: 27, brand: "Spiderman",image: "https://m.media-amazon.com/images/I/61kORrI+u4L.AC_UF1000,1000_QL80.jpg",name: "SpiderMan Bike",price: '₹3500'},
        { id: 28, brand: "Spiderman",image: "https://www.lego.com/cdn/cs/set/assets/bltf0ab693c19bdebeb/40670_alt1.png?fit=crop&quality=80&width=600&height=600&dpr=1",name: "SpiderMan Mini Blocks",price: '₹5100'},
        {id: 29,brand: "Barbie",image: "https://m.media-amazon.com/images/I/71P0BSKiWzL._AC_UF1000,1000_QL80_.jpg",name: "Barbie Wardrobe",price: '₹1800'},
        {id: 30,brand: "Barbie",image: "https://hmadmin.hamleys.in/product/491232286/300/491636216-2.jpg",
        name: "Barbie Dreamhouse Pool",price: '₹2200'},
        { id: 31,brand: "Barbie",image: "https://images.mattel.net/image/upload/w_360,c_scale/shop-emea-prod/files/vvi6os9sf84hv8ckrlgv_c067d7d0-cbc9-4ae3-a641-a45054090068.jpg?v=1718381051",name: "Barbie Doll",price: '₹3500'},
        {id: 32,brand: "Barbie",image: "https://www.parents.com/thmb/eo5lLrDqiEqj7cPRa8i3H1jIJZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/barbie-doll-house-glam-getaway-portable-house-playset-71fdbc90915142fcbf5b63dd71b1d8fa.jpg", name: "Barbie Home Set",price: '₹5100'},
        {id: 33,brand: "Avengers",image: "https://m.media-amazon.com/images/I/81Bc2YHTb8L._AC_UF1000,1000_QL80_.jpg",name: "Pack of 5 Avengers Superman",price: '₹1800'},
        {id: 34,brand: "Avengers",image: "https://ew.com/thmb/RHJ111W2C2xyXRfH-_vzV0sNKC0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/marvel-avengers-endgame-titan-hero-deluxe-hulk-6-inch-figure-in-pck-b317fc47503b420eac544f959639364c.jpg", name: "Avengers Endgame",price: '₹2200'},
        {id: 35,brand: "Avengers",image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491568833/665/491568833-3.webp",name: "Iron Man Mask",price: '₹3500'},
        {id: 36,brand: "Avengers",image: "https://i.ebayimg.com/images/g/GN0AAOSwAaNhmBWx/s-l1600.jpg",name: "Marvel Avengers Titan Heros",price: '₹5100'},
        {id: 37,brand: "Mickey Mouse",image: "https://m.media-amazon.com/images/I/81EU-t5kRqL.jpg",name: "Mickey Mouse Club House",price: '₹1800'},
        {id: 38,brand: "Mickey Mouse",image: "https://m.media-amazon.com/images/I/61WOeN0nXaS.jpg",name: "Mickey Mouse Toy",price: '₹2200'},
        {id: 39,brand: "Mickey Mouse",image: "https://m.media-amazon.com/images/I/71CA4CBDQ0L.jpg", name: "Mickey Mouse and Friends",price: '₹3500'},
        {id: 40,brand: "Mickey Mouse",image: "https://m.media-amazon.com/images/I/71WCzJ+DyJL.jpg",name: "Mickey Mouse Toy Car",price: '₹5100'},
        {id: 41,brand: "Frozen",image: "https://images-cdn.ubuy.co.in/63b2085d19a31d0408070012-disney-frozen-toys-singing-anna-doll-in.jpg",name: "Frozen Anna Doll", price: '₹1800'},
        {id: 42,brand: "Frozen",image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1575476862-51KQxkYE9oL.jpg",name: "Disney Frozen Dollhouse",price: '₹2200'},
        {id: 43,brand: "Frozen",image: "https://images-cdn.ubuy.co.in/655dece294ddf40ba336673b-disney-frozen-2-small-doll-playset.jpg",name: "Frozen Family",price: '₹3500'},
        {id: 44,brand: "Frozen",image: "https://ae01.alicdn.com/kf/Sbf337c8f75884d019fa147b6d8a1fa6f8.jpg_640x640Q90.jpg_.webp",name: "Frozen Jumbo Eggs",price: '₹5100'},
        {id: 45,image: "https://m.media-amazon.com/images/I/81P+5qYcgQL._AC_UF894,1000_QL80_.jpg",name: "Toss and Catch Ball",price: '₹4000'},
        {id: 46,image: "https://image.made-in-china.com/2f0j00fyDcLeiaZmkI/Sports-Toys-Kids-Golf-Toy-Set-Indoor-Playing-Games-Ball-Shooter-Outdoor-Game-Plastic-Sport-for-Children-Throwing.webp",name: "Golf Toy",price: '₹2200'},
        {id: 47,image: "https://m.media-amazon.com/images/I/71YYUQQ248L.jpg",name: "Elephant Butterfly Catcher Game",price: '₹3500'},
        {id: 48,image: "https://kidzon.co/cdn/shop/products/71b07MYZ2JL._SL1500_-Copy_4d113aa3-9abb-4afc-9cb7-ed74b61f5d1c.jpg?v=1637395544", name: "Garden Slide",price: '₹5100'},
        {id: 49,image: "https://talesofamountainmama.com/wp-content/uploads/2019/12/Rolling-wheel-1.jpg", name: "Tales of Mountain", price: 1800},
        {id: 50,image: "https://i.ebayimg.com/images/g/q0YAAOSwAUFlY5cv/s-l1200.jpg", name: "Shooting Air Gun", price: 2200},
        { id: 51,image: "https://s.alicdn.com/@sc04/kf/Hf52edd135ee94c459ca241460c61fbfaB.jpg_720x720q50.jpg",name: "Bow and Arrow", price: 3500},
        { id: 52,image: "https://images.meesho.com/images/products/50203982/erq0h_512.webp",name: "Basket Ball", price: 5100}
        
        
        
      ];

      // Filter items based on the query
      const filteredItems = allItems.filter(item => {
        const searchTerm = query.toLowerCase();
        return item.name.toLowerCase().includes(searchTerm) ||
               (item.category && item.category.toLowerCase().includes(searchTerm)) ||
               (item.brand && item.brand.toLowerCase().includes(searchTerm));
      });

      setResults(filteredItems);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      console.log('Adding to cart:', item);
      addToCart(item); // Use addToCart from CartContext
    }
  };

  const handleToggleWishlist = (item) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      if (wishlist.some((wishItem) => wishItem.id === item.id)) {
        dispatch(removeFromWishlist(item.id));
      } else {
        dispatch(addToWishlist(item));
      }
    }
  };

  return (
    <div className="search-results">
      <h2>Search Results for: {query}</h2>
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button style={{ backgroundColor: '#ff9800', color: 'white',border:'none',color:'black',width:'150px',height:'30px' ,fontSize:'17px'}} onClick={() => handleAddToCart(item)}>Add to Cart</button>

              <FontAwesomeIcon
  icon={wishlist.some((wishItem) => wishItem.id === item.id) ? solidHeart : regularHeart}
  onClick={() => handleToggleWishlist(item)}
  className="wishlist-icon"
  style={{ color: wishlist.some((wishItem) => wishItem.id === item.id) ? 'red' : 'gray' }} // Change colors as needed
/>

            </div>
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
