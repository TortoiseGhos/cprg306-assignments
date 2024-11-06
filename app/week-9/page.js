"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() { 
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    return(
        <div>
            <h1>Week 9</h1>
            <p>{user ? "Hi There" : "Please sign in"}</p>
            <p>{user?.email}</p>
            <a className="hover:underline"href="./week-8/">{user? "Continue To your Shopping List" : ""}</a>
            <p>
                {user ? (
                    <button className="hover:underline" onClick={firebaseSignOut}>Sign Out</button>
                ) : ( 
                    <button className="hover:underline" onClick={gitHubSignIn}>Sign In</button>
                )}
            </p>
        </div>
    )
}