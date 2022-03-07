import { Link } from 'react-router-dom';


function Navbar() {

    

    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" class="navbar-brand">Home</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link to="/login" class="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/register" class="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar