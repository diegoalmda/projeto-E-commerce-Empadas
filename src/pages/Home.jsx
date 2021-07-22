import React from 'react';
import logo from '../assets/img/logo.png';
import chocolate from '../assets/img/chocolate.jpg';
import frango from '../assets/img/frango.jpg';
import calabresa from '../assets/img/calabresa.jpg';
import camarao from '../assets/img/camarao.jpg';
import vegana from '../assets/img/vegana.jpg';
import Title from '../components/SectionTitle';
import { NavLink } from 'react-router-dom';

function Home() {

    return (
        <div className="container">
            <div className="back-info">
                <div className="message">
                    <p>A melhor empada <br />de Curitiba e região</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logotipo" />
                </div>                
            </div>
            <Title title="Sabores Especiais" />
            <div className="home-content">
                <div className="empada">
                    <NavLink to="/cardapio" exact activeClassName="active">
                        <h2>Frango</h2>
                        <img src={frango} alt="Empada de frango" />
                    </NavLink>                    
                </div>
                <div className="empada">
                    <NavLink to="/cardapio" exact activeClassName="active">
                        <h2>Calabresa</h2>
                        <img src={calabresa} alt="Empada de calabresa" />
                    </NavLink>
                </div>
                <div className="empada">
                    <NavLink to="/cardapio" exact activeClassName="active">
                        <h2>Camarão</h2>
                        <img src={camarao} alt="Empada de camarao" />
                    </NavLink>
                </div>
                <div className="empada">
                    <NavLink to="/cardapio" exact activeClassName="active">
                        <h2>Chocolate</h2>
                        <img src={chocolate} alt="Empada de choccolate" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Home;