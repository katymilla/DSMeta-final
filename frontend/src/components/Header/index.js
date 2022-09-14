import logo from '../../assets/img/logo.jpg';
import './styles.css';

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={'${process.env.PUBLIC_URL}${item.imagem}'}/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por Katymilla Girotto</p>
        </div>  
    </header> 

    )
  }
  
  export default Header;