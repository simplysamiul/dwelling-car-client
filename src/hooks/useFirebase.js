import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Components/Login/Firebase/firebase.init";

initializeAuth();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [admin , setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Create user
    const createUser = (email, password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            setError("");
            const newUser = {email, displayName: name};
            setUser(newUser);
            // save user info to the database
            saveUser(email, name, "POST");
            // Send Name to firebase
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');
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
            setError("");
            const destination = location?.state?.from || "/";
            history.replace(destination);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally(()=> setIsLoading(false));
    };

    // Google Sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            setError("");
            // save user info to the database
            saveUser(user.email, user.displayName, "PUT");
            const destination = location?.state?.from || "/";
            history.replace(destination);
        })
        .catch((error) => {
            setError(error.message);
          })
          .finally(()=> setIsLoading(false));
    };

    // Check admin 
    useEffect(()=>{
        const url = `https://dwelling-car-server.up.railway.app/users/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email]);

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

    // Send User info in database
    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch("https://dwelling-car-server.up.railway.app/users", {
            method: method,
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then()
    };

    return{
        user,
        error,
        isLoading,
        createUser,
        googleSignIn,
        logInUser,
        logOut,
        admin

    }
};

export default useFirebase;