import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs";
const Header = () => {
    return (
    <>
    <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                    <p className="text-white mb-0">
                        Entrega Grátis acima de R$100
                    </p>
                </div>
                <div className="col-6">
                    <p className="text-end text-white mb-0">
                        Ligue: <br />
                        <a className="text-white" href="11 999498543">
                            11 999999999
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-2">
                    <h2 className="logo">
                        <NavLink to='/' className="text-white"><img classname='logo 'src="images/zeedog-logo.png" alt="logo"></img></NavLink>
                    </h2>
                </div>
                <div className="col-5">
                    <div className="input-group">
                        <input 
                        type="text" 
                        className="form-control py-2" 
                        placeholder="Pesquise aqui..." 
                        aria-label="Pesquise aqui..." 
                        aria-describedby="basic-addon-2"
                        />
                        <span className="input-group-text p-3" id="basic-addon-2">
                            <BsSearch className="fs-6"></BsSearch>
                        </span>
                    </div>
                </div>
                <div className="col-5">
                    <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                            <NavLink to='/compare' className="d-flex align-items-center gap-10 text-white">
                                <img src="images/compare.svg" alt="comparar"></img>
                                <p className="mb-0">
                                    Comparar <br /> Produtos
                                </p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/wishlist' className="d-flex align-items-center gap-10 text-white">
                            <img src="images/wishlist.svg" alt="wishlist"></img>
                                <p className="mb-0">
                                    Lista de <br /> Favoritos
                                </p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='/login'className="d-flex align-items-center gap-10 text-white">
                            <img src="images/user.svg" alt="login"></img>
                                <p className="mb-0">
                                    Login <br /> Minha Conta
                                </p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to='' className="d-flex align-items-center gap-10 text-white">
                            <img src="images/cart.svg" alt="carrinho"></img>
                            <div className="d-flex flex-column gap-10">
                                <span className="badge bg-white text-dark">0</span>
                                <p className="mb-0">R$ 500</p>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                        <div className="dropdown">
                                <button 
                                className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                                type="button" 
                                id="dropdownMenuButton1" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                >
                                   <img src="images/memu.sgv" alt=""></img>
                                   <span className="me-5 d-inline-block">
                                    Shop Categories
                                    </span>
                                </button>
                                <ul 
                                className="dropdown-menu" 
                                aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                        </div>
                        </div>
                        <div className="menu-links">
                            <div className="d-flex align-items-center gap-15">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/store">Nossa Loja</NavLink>
                                <NavLink to="/blogs">Blog</NavLink>
                                <NavLink to="/contact">Contato</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    );
};

export default Header;