import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation();
  return (
    <>
    <div 
    className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src='images/wish.svg' alt='wishlist'></img>
                </Link>
            </div>
            <div 
            className='product-image'>
                <img src='images/zeedog-produto-1.jpg' alt='productimage'></img>
            </div>
                <div className='product-datails'>
                    <h6 className='brand'>ZeeDog</h6>
                    <h5 className='product-title'>
                    Coleira para cachorros Bloom
                    </h5>
                    <ReactStars 
                    count={5} 
                    size={24} 
                    value="3" 
                    edit={false}
                    activeColor="#ffd700" 
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='price'>R$ 79,00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                        <img src='images/prodcompare.svg' alt=''></img>
                        </Link>
                        <Link>
                        <img src='images/view.svg' alt=''></img>
                        </Link>
                        <Link>
                        <img src='images/add-cart.svg' alt=''></img>
                        </Link>
                    </div>
                </div>
            </Link>
    </div>
    <div 
    className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                <img src='images/wish.svg' alt=''></img>
                </Link>
            </div>
            <div 
            className='product-image'>
                <img src='images/zeedog-produto-2.jpg' alt='productimage'></img>
            </div>
                <div className='product-datails'>
                    <h6 className='brand'>ZeeCat</h6>
                    <h5 className='product-title'>
                    Coleira para gatos Bloom
                    </h5>
                    <ReactStars 
                    count={5} 
                    size={24} 
                    value="3" 
                    edit={false}
                    activeColor="#ffd700" 
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='price'>R$ 39,00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                        <img src='images/prodcompare.svg' alt=''></img>
                        </Link>
                        <Link>
                        <img src='images/view.svg' alt=''></img>
                        </Link>
                        <Link>
                        <img src='images/add-cart.svg' alt=''></img>
                        </Link>
                    </div>
                </div>
            </Link>
    </div>
    </>
    
  );
};

export default ProductCard;