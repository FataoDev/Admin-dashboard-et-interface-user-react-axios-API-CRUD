import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {userService} from '@/_services'

const UserAdd = () => {
    let navigate=useNavigate()
    const [user,setUsers]=useState([])
    // const [user,setUsers]=useState({
    //     nom:'',
    //     prenom:'',
    //     pseudo:'',
    //     email:'',
    //     password:''
    // })

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
        userService.addUser(user)
        .then(res => {
            console.log(res)
            navigate('../index')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='UserAdd'>
            Ajouter un utilisateur

            <form onSubmit={onSubmit}>
                <div className='group'>
                    <label htmlFor='nom'>Nom</label>
                    <input type='Text' name='nom' value={user.nom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='prenom'>Prénom</label>
                    <input type='Text' name='prenom' value={user.prenom} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='pseudo'>Pseudo</label>
                    <input type='Text' name='pseudo' value={user.pseudo} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='email'>Email</label>
                    <input type='Text' name='email' value={user.email} onChange={onChange}/>
                </div>
                <div className='group'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='Password' name='password' value={user.password} onChange={onChange}/>
                </div>
                 <div className='group'>
                     <button>Ajouter</button>
                 </div>
            </form>
        </div>
    );
};

export default UserAdd;