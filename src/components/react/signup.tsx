import {
    authClient
} from "@/lib/auth-client";
import { useState } from "react";

export default function Signup() {
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {data, error} = await authClient.signUp.email(signupData);
        if(data?.user) {
            window.location.href = "/todos";
        }
        if(error) {
            console.log(error);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setSignupData({
            ...signupData,
            [field]: e.target.value
        })
    }
    return (<div>
        <h1>Signup</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="name" id="name" onChange={(e) => onChange(e, "name")} />
            <input type="email" name="email" id="email" onChange={(e) => onChange(e, "email")} />
            <input type="password" name="password" id="password" onChange={(e) => onChange(e, "password")} />
            <button type="submit">Sign up</button>
        </form>
    </div>) 
}