"use client";
import Page from "C:/CPRG306/cprg306-assignments/app/week-8/page.js"
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    if (!user) {
        return(
            <p></p>
        )
    }
    return(
        <Page></Page>    
    )
}