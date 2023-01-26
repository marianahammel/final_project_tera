import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
const Contact = () => {
  return (
    <>
      <Meta title={'Contato'}/>
      <BreadCrumb title="Contato"/>
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29255.648727205345!2d-46.75993600306806!3d-23.570020438842327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57990187b23f%3A0x2df7aaad5c4c8814!2sTera%20-%20Unidade%20Pinheiros!5e0!3m2!1spt-BR!2sbr!4v1674671268759!5m2!1spt-BR!2sbr" 
            width="600" 
            height="450" 
            title='mapa'
            className='border-0 w-100'
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contato</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input 
                      type='text' 
                      className='form-control'
                      placeholder='Nome'
                      ></input>
                    </div>
                    <div>
                      <input 
                      type='email' 
                      className='form-control'
                      placeholder='E-mail'
                      ></input>
                    </div>
                    <div>
                      <input 
                      type='tel' 
                      className='form-control'
                      placeholder='Número Celular'
                      ></input>
                    </div>
                    <div>
                      <textarea 
                      name='' 
                      id='' 
                      className='w-100 form-control' 
                      cols='30'
                      rows='4'
                      placeholder='Comentário'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Entre em Contato</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5'/>
                        <address className='mb-0'>R. Natingui, 862 - Pinheiros, São Paulo - SP, 05424-000</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5'/>
                        <a href='tel: 11 999999999'>11 999999999</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5'/>
                        <a href='mailto:mariana@mariana.com'>contato@contato.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5'/>
                        <p className='mb-0'>Segunda - Sexta das 9:00 - 18:00</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
);
};

export default Contact;