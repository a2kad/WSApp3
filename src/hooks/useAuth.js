import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function useAuth() {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect( ()=>{
        setLoading(true)
        const unsub = onAuthStateChanged(auth,user=>{
            console.log('Got user ', user);
            if(user){
                setUser(user);
                setLoading(false);
            }else{
                setUser(null);
                setLoading(false);
            }
        });
        return unsub;
    },[]);
    return {user,loading}
}