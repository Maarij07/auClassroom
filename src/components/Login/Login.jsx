import React, { useState } from 'react';
import { auth } from '../../lib/firebase';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useLocalContext } from '../../context/context';

export default function SignIn() {
    const {login} = useLocalContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = (e, type) => {
        e.preventDefault();
        if (type === 'signin') {
            signInWithEmailAndPassword(auth, email, password)
                .then(data => {
                    navigate('/home');
                })
                .catch(err => {
                    alert(err.code);
                });
        }
    };

    // const handleLoginWithGoogle = async() => {
    //     try{
    //         const provider= new GoogleAuthProvider();
    //         const result = await signInWithPopup(auth,provider);
    //         const user= result.user;

    //         const userRef = firestore.collection('users').doc(user.uid);
    //         const snapshot = await userRef.get();

    //         if(snapshot.exists()){
    //             console.log('User Signed In with Google: ',user.email);
    //         }
    //         else{
    //             console.log('User is not registered with Google');
    //         }
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    return (
        <div className="flex">
            <div className="h-screen flex flex-col items-center justify-center gap-[0.2rem] w-1/2">
                <h2 className='font-bold text-3xl text-black opacity-90'>Welcome to</h2>
                <h3 className='font-extrabold font-["Open_Sans"] text-[3.3rem] text-[#008080]'>Air Classroom.</h3>
                <h4 className='text-center mb-4'>Login to continue with your study session</h4>
                <form onSubmit={(e) => handleFormSubmit(e, 'signin')} className='flex flex-col gap-3 w-[22rem]'>
                    <input className='border-2 rounded-full py-2 px-4' required type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
                    <input className="border-2 rounded-full py-2 px-4" required type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                    <button type="submit" className="rounded-full py-2 font-bold bg-gradient-to-r from-cyan-500 to-[#008080] text-white">SIGN IN</button>
                    <p className='mx-auto text-gray-500 text-xl font-bold'>OR</p>
                    <button className='flex gap-4 rounded-full items-center justify-center text-red-500 font-bold' onClick={login}><FaGoogle />Login With Google</button>
                </form>
            </div>
            <div className="w-1/2 bg-blue-500 flex items-center justify-center">
                <img src={'../../public/banner.png'} alt="AIR" className='w-full h-full object-cover' />
            </div>
        </div>
    );
}
