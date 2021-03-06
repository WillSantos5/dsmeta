import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvedor : 
                    <a href="https://github.com/WillSantos5"> GitHub: WillSantos5</a>
                    <br></br>
                    Semana Spring React DevSuperior :
                    <a href="https://www.instagram.com/devsuperior.ig"> @devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}

export default Header;

