import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Components/Login/Firebase/firebase.init";

initializeAuth();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Create user
    const createUser = (email, password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user  = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            setError("");
            history.push('/');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(()=> setIsLoading(false));
    };

    // Log In User
    const logInUser = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setError("");
            const destination = location?.state?.from || "/";
            history.push(destination);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(()=> setIsLoading(false));
    };

    // Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unSubscribe;
    },[auth]);

    // Log Out 
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{

        })
        .catch((error)=>{

        })
        .finally(()=> setIsLoading(false));
    };

    return{
        user,
        error,
        isLoading,
        createUser,
        logInUser,
        logOut

    }
};

export default useFirebase;