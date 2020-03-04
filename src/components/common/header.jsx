import React from 'react';
import { Link } from 'react-router-dom';
import headerData from '../../dataSource/headerData'



const Header = () => {
    return (
        <div className={'NavContainer'}>
            <ul>
                {
                    headerData.map((value, index) => {
                        return <li key={index}><Link to={value.url}>{value.pathName}</Link></li>
                    })
                }
            </ul>

        </div>
    );

}

export default Header;