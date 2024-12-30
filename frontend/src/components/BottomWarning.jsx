import { Link } from "react-router-dom"

export function ButtonWarning({label, buttonText, to}){
    return (
        <div className="py-2 text-sm flex justify-center">
            <div>
                {label}
            </div>
            <Link className="pl-1 underline cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>       
    )
}