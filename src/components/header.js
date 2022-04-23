import '../styles/header.css';
import logo from '../logo.svg';

function Header() {
    return (

        <>
            <nav className='con d-flex justify-content-between align-items-center shadow-lg'>
                    <span className='d-flex align-items-center ps-5'>
                        <img src={logo} />
                        <h3>ReactFacts</h3>
                    </span>
                    <h4 className='proj pe-5'>React Course - Project 1</h4>
            </nav>
        </>

    );
}

export default Header;