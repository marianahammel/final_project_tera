import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/zeedog-blog-1.jpg' className='img-fluid w-100' alt='blog-imagem'></img>
            </div>
            <div className='blog-content'>
                <p className='date'>15 Jan, 2023</p>
                <h5 className='title'>Tudo sobre refeição natural</h5>
                    <p className='desc'>
                        Lorem ipsum
                    </p>
                    <Link to="" className='button'>Read More</Link>
            </div>
        </div>
  );
};

export default BlogCard;