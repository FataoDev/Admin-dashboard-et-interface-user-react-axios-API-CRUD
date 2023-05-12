import React from 'react';
import { useNavigate } from 'react-router-dom';
import {accountService} from '@/_services/account_service';
import '@/pages/Admin/admin.css'

const Header = () => {
    let navigate= useNavigate()
    const logout=()=>{
        accountService.logout()
        navigate('/')
    }

    return (
        <div className='AHeader'>
            Interface administrateur
            <button onClick={logout} id='btn-header'>Déconnecter</button>
        </div>
    );
};

export default Header;