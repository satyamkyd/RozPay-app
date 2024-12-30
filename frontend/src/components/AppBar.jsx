export function AppBar(){
    return (
        <div className="flex justify-between shadow h-14">
            <div className="flex flex-col justify-center ml-4 font-medium">
                RosePay App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center text-xl">U</div>
                </div>
            </div>
        </div>
    )
}