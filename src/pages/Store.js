import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const Store = () => {
    const [grid, setGrid] = useState (4);

  return (
    <>
        <Meta title={'Loja'}/>
        <BreadCrumb title="Loja"/>
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Compre por Categoria</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Gatos</li>
                                    <li>Cachorros</li>
                                    <li>Acessórios</li>
                                    <li>Alimentação</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Disponibilidade</h5>
                                <div>
                                <div className='form-check'>
                                    <input 
                                    className='form-check-input' 
                                    type='checkbox' 
                                    value='' 
                                    id=''
                                    />
                                    <label className='form-check-label' htmlFor=''>
                                        Em Estoque [1]
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input 
                                    className='form-check-input' 
                                    type='checkbox' 
                                    value='' 
                                    id=''
                                    />
                                    <label className='form-check-label' htmlFor=''>
                                    Esgotado [0]    
                                    </label>
                                </div>
                                </div>
                                <h5 className='sub-title'>Preço</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating mb-3'>
                                    <input
                                        type="email"
                                        className='form-control'
                                        id='floatingInput'
                                        placeholder='from'
                                        />
                                    <label htmlFor="floatingInput">De</label>
                                    </div>
                                    <div className='form-floating mb-3'>
                                    <input
                                        type="email"
                                        className='form-control'
                                        id='floatingInput1"'
                                        placeholder='to'
                                        />
                                    <label htmlFor="floatingInput1">Até</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='mb-0 d-block' style={{ width: "100px"}}>Sort By:</p>
                                <select
                                name=''
                                className='form-control form-select'
                                id=''
                                >
                                    <option value='manual'>Featured</option>
                                    <option value='best-selling' selected="selected">Mais Vendidos</option>
                                    <option value='title-ascending'>A-Z</option>
                                    <option value='title-descending'>Z-A</option>
                                    <option value='price-ascending'>Preço Maior para Menor</option>
                                    <option value='price-descending'>Preço Menor para Maior</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalproducts mb-0'>21 Produtos</p>
                                <div className='d-flex align-items-center gap-10 grid'>
                                    <img 
                                    onClick={() => {setGrid(3);
                                    }} 
                                    src='images/gr4.svg' className='d-block img-fluid' alt='grid'></img>
                                    <img 
                                     onClick={() => {setGrid(4);
                                     }} 
                                    src='images/gr3.svg' className='d-block img-fluid' alt='grid'></img>
                                    <img 
                                     onClick={() => {setGrid(6);
                                     }} 
                                    src='images/gr2.svg' className='d-block img-fluid' alt='grid'></img>
                                    <img 
                                     onClick={() => {setGrid(12);
                                     }} 
                                    src='images/gr.svg' className='d-block img-fluid' alt='grid'></img>
                                </div>
                            </div>
                            </div>              
                        </div>
                        <div className='product-list pb-5'>
                        <div className='d-flex gap-10 flex-wrap'>
                        <ProductCard grid={grid} /> </div>                                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Store;