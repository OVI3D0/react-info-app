import '../styles/header.css';

function Header() {
    return (

        <>
            <nav className='con d-flex justify-content-between align-items-center shadow-lg'>
                    <span className='d-flex align-items-center ps-5'>
                        <img src='/react-logo.jpg' />
                        <h3>ReactFacts</h3>
                    </span>
                    <h4 className='proj pe-5'>React Course - Project 1</h4>
            </nav>
        </>

    );
}

export default Header;