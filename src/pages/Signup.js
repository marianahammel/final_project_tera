import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <Meta title={'Cadastrar'}/>
    <BreadCrumb title="Cadastrar"/>

    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Cadastrar</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input 
                                type='text' 
                                name='name' 
                                placeholder='Nome' 
                                className='form-control'
                                ></input>
                            </div>
                            <div>
                                <input 
                                type='text' 
                                name='lastname' 
                                placeholder='Sobrenome' 
                                className='form-control'
                                ></input>
                            </div>
                            <div>
                                <input 
                                type='email' 
                                name='email' 
                                placeholder='E-mail' 
                                className='form-control'
                                ></input>
                            </div>
                            <div>
                                <input 
                                type='tel' 
                                name='celular' 
                                placeholder='Celular' 
                                className='form-control'
                                ></input>
                            </div>
                            <div className='mt-1'>
                                <input 
                                type='password' 
                                name='password' 
                                placeholder='Senha' 
                                className='form-control'
                                ></input> 
                            </div>
                            <div>   
                                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Enviar</button>
                                    <Link to='/login'>Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Signup;