import {
    authClient
} from "@/lib/auth-client";
import { useState } from "react";

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {data, error} = await authClient.signIn.email(loginData);
        if(data?.user) {
            window.location.href = "/todos";
        }
        if(error) {
            console.log(error);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setLoginData({
            ...loginData,
            [field]: e.target.value
        })
    }
    return (<div>
        <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="email" name="email" id="email" onChange={(e) => onChange(e, "email")} />
            <input type="password" name="password" id="password" onChange={(e) => onChange(e, "password")} />
            <button type="submit">Login</button>
        </form>
    </div>) 
}