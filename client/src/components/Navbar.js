import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';
function Navbar() {
    const loginState = useSelector(state => state.loginUserReducer);
    // console.log(cartState);
    function handleLogout() {
        dispatch(logoutUser());
    }
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: 'black', fontWeight: '700', fontSize: '25px' }}>Learning System</a>
                    <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse"
                        style={{ backgroundColor: "#0074d9", color: "white" }}
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {
                                    loginState.isLogin
                                        ? <div className="justify-content-center w-100" style={{ margin: "auto" }}>
                                            <Dropdown>
                                                <Dropdown.Toggle className="btn btn-primary" id="dropdown-basic"

                                                >
                                                    {loginState.user.name}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu style={{ margin: "auto" }}>
                                                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        : <div>
                                            <a className="btn btn-primary" style={{ marginRight: "10px" }} href="/register">Register</a>
                                            <a className="btn btn-primary" href="/login">Login</a>
                                        </div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar