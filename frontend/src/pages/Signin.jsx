import { ButtonWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return (
        <div className="bg-gray-600 flex justify-center h-screen">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 h-max px-4 text-center p-2">
                    <Heading label={"Sign In"}></Heading>
                    <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                    <InputBox label={"Email ID"} placeholder={"satyam@gmail.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"Aa!@123"}></InputBox>
                    <div className="pt-4">
                        <Button label={"Sign In"}></Button>
                    </div>
                    <ButtonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}></ButtonWarning>
                </div>
            </div>
        </div>
    )
}