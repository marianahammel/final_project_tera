import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
const Forgotpassword = () => {
  return (
    <> 
    <Meta title={'Esqueci Senha'}/>
    <BreadCrumb title="Minha Conta"/>

    <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Esqueci Senha</h3>
                        <p className='text-center mt-2 mb-3'>Vamos enviar um e-mail para criar uma nova senha</p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type='email' name='email' placeholder='E-mail' className='form-control'></input>
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
    </>
  );
};

export default Forgotpassword;