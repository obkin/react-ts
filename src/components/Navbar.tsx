import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/trash">Trash</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
