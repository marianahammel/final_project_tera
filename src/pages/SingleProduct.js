import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
  return (
    <>
        <Meta title={'Produto'}/>
        <BreadCrumb title="Produto"/>
    </>
  );
};

export default SingleProduct;