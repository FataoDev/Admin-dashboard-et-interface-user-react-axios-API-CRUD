import React, {useEffect, useRef,useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {userService} from '@/_services'

const UserEdit = () => {
    const [user,setUsers]=useState([])
    const flag = useRef(false)
    let navigate=useNavigate()

    // recuperation de ID utilisateur
    let {uid} = useParams();
    // console.log(uid); 

    // Handle modification dans le formulaire
    const onChange=(e)=>{
        setUsers({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Soumission du formulaire
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(user)
        userService.updateUser(user)
        .then(res => {
            navigate('../index')
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{   
        if(flag.current===false){
            userService.getUser(uid)
            .then(res => {
                console.log(res.data.data)
                setUsers(res.data.data)

            })
            .catch(err => console.log(err))
        }

        return ()=> flag.current=true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div className='UserEdit'>
            Modifier un utilisateur

            <form onSubmit={onSubmit}>
                <div className='group'>
                    <label htmlFor='login'>Nom</label>
                    <input type='Text' name='nom' value={user.nom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Prénom</label>
                    <input type='Text' name='prenom' value={user.prenom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Pseudo</label>
                    <input type='Text' name='pseudo' value={user.pseudo} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='login'>Email</label>
                    <input type='Text' name='email' value={user.email} onChange={onChange}/>
                </div>
                 <div className='group'>
                     <button>Modifier</button>
                 </div>
            </form>
        </div>
    );
};

export default UserEdit;