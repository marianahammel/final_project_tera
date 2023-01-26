import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
  <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src='images/newsletter.png' alt='newsletter'></img>
              <h2 className='mb-0 text-white'>Cadastre-se para saber as novidades</h2>
            </div>
          </div>
          <div className='col-7'>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Seu e-mail..." 
                aria-label="Seu e-mail..." 
                aria-describedby="basic-addon-2"
              />
              <span className="input-group-text p-2" id="basic-addon-2">
                Enviar
              </span>
              </div>
          </div>    
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
              R. Natingui, 862 - Pinheiros, São Paulo - SP<br /> 05424-000
              </address>
              <a 
              href='11 999999999' 
              className='mt-3 d-block mb-1 text-white'
              >
                11 999999999
              </a>
              <a 
              href='mailto:mcontato@contato.com' 
              className='mt-2 d-block mb-0 text-white'
              >
                contato@contato.com
              </a>
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' to=''>
                <BsWhatsapp className='fs-4' />
                </a>
                <a className='text-white' to=''>
                <BsInstagram className='fs-4' />
                </a>
                <a className='text-white' to=''>
                <BsFacebook className='fs-4' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Informações</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacidade</Link>
              <Link className='text-white py-2 mb-1'>Devolução</Link>
              <Link className='text-white py-2 mb-1'>Envios</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div> 
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>ZeeDog</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Sobre Nós</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contato</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Links Diretos</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Gatos</Link>
              <Link className='text-white py-2 mb-1'>Cachorros</Link>
              <Link className='text-white py-2 mb-1'>Acesórios</Link>
              <Link className='text-white py-2 mb-1'>Alimentação</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by Mariana
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);
};

export default Footer;
