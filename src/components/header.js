import '../styles/header.css';

function Header() {
    return (

        <>
            <div className='con'>
                <div className='row'>
                    <div className='col-8 d-flex align-items-center'>
                        <img src='/react-logo.jpg' />
                        <h3>ReactFacts</h3>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <h4 className='proj'>React Course - Project 1</h4>
                    </div>
                </div>


            </div>
        </>

    );
}

export default Header;