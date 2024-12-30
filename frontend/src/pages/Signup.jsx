import axios from "axios"
import { useState } from "react"
import { ButtonWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="bg-slate-300 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white p-2 w-80 text-center h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Satyam"}/>
                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Kumar"}/>
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"satyam@gmail.com"}/>
                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }} label={"Password"} placeholder={"Aa!@123"} />
                <div className="pt-4">
                    <Button onClick={async() => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        },{
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        localStorage.setItem("token", response.data.token)
                    }} label={"Sign Up"}/>
                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}