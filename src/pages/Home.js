import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img 
                                src="images/zeedog-main-banner-1.jpg" 
                                className="img-fluid rounded-3"
                                alt="main banner">
                                </img>
                                <div className="main-banner-content position-absolute">
                                    <h4>Peitoral Antipuxão</h4>
                                    <h5>SofterWalk</h5>
                                    <p>A partir de R$159,00</p>
                                    <Link className="button">COMPRAR</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img 
                                src="images/zeedog-banner-2.jpg" 
                                className="img-fluid rounded-3"
                                alt="main banner">
                                </img>
                                <div className="small-banner-content position-absolute">
                                    <h4>LANÇAMENTO</h4>
                                    <h5>Bolsa</h5>
                                    <p>
                                        A partir de R$ 49,00
                                        </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img 
                                src="images/zeedog-banner-2.jpg" 
                                className="img-fluid rounded-3"
                                alt="main banner">
                                </img>
                                <div className="small-banner-content position-absolute">
                                    <h4>LANÇAMENTO</h4>
                                    <h5>Bolsa</h5>
                                    <p>
                                        A partir de R$ 49,00
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img 
                                src="images/zeedog-banner-2.jpg" 
                                className="img-fluid rounded-3"
                                alt="main banner">
                                </img>
                                <div className="small-banner-content position-absolute">
                                    <h4>LANÇAMENTO</h4>
                                    <h5>Bolsa</h5>
                                    <p>
                                        A partir de R$ 49,00
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img 
                                src="images/zeedog-banner-2.jpg" 
                                className="img-fluid rounded-3"
                                alt="main banner">
                                </img>
                                <div className="small-banner-content position-absolute">
                                    <h4>LANÇAMENTO</h4>
                                    <h5>Bolsa</h5>
                                    <p>
                                        A partir de R$ 49,00
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-15">
                                    <img src="images/service.png" alt="services"></img>
                                    <div>
                                        <h6>Entrega Grátis</h6>
                                        <p className="mb-0">Pedidos acima de R$ 100</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="services"></img>
                                    <div>
                                        <h6>Ofertas Diárias</h6>
                                        <p className="mb-0">Até 25% off</p>
                                    </div>   
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="services"></img>
                                    <div>
                                        <h6>Suporte 24/7</h6>
                                        <p className="mb-0">Compre com um especialista</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="services"></img>
                                    <div>
                                        <h6>Preços Acessíveis</h6>
                                        <p className="mb-0">Desconto de Fábrica</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                <img src="images/service-05.png" alt="services"></img>
                                    <div>
                                        <h6>Pagamentos Seguros</h6>
                                        <p className="mb-0">100% Protegido</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Coleiras</h6>
                                        <p>10 Itens</p>
                                    </div>
                                    <img src="images/zeedog-main-1.jpg" alt="camera"></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Camas</h6>
                                        <p>10 Itens</p>
                                    </div>
                                    <img src="images/zeedog-main2.png" alt="camera"></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Roupas</h6>
                                        <p>10 Itens</p>
                                    </div>
                                    <img src="images/zeedog-main3.jpg" alt="camera"></img>
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div>
                                        <h6>Alimentação</h6>
                                        <p>10 Itens</p>
                                    </div>
                                    <img src="images/zeedog-main4.jpg" alt="camera"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Mais Vendidos</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className="marque-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marque-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        <img src="images/zeedog-brand-1.png" alt="marcas"></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/zeedog-brand-2.png" alt="marcas"></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/zeedog-brand-3.png" alt="marcas"></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/zeedog-brand-4.png" alt="marcas"></img>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/zeedog-brand-5.png" alt="marcas"></img>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogg-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Últimas Notícias</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                        <BlogCard />
                        </div>
                        <div className="col-3">
                        <BlogCard />
                        </div>
                        <div className="col-3">
                        <BlogCard />
                        </div>
                        <div className="col-3">
                        <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
