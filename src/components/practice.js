import '../styles/practice.css';

function Practice() {
    return (
        <>
            <div className="pt-5 vh-100 bod" style={{backgroundColor: "#33373E"}}>
                <h1 className='pb-5 fw-bolder'>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </>
    );
}

export default Practice;