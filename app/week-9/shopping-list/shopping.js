"use client";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    if (!user) {
        return(
            <p></p>
        )
    }
    return(
        <a className="hover:underline"href="./week-8/">{user? "Continue To your Shopping List" : ""}</a>  
    )
}