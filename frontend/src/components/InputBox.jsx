export function InputBox({label, placeholder, onChange}){
    return (
        <>
            <div className="text-sm py-2 text-left font-medium">
                {label}
            </div>
            <input onChange={onChange} className="w-full rounded border px-2 py-1 border-slate-300" placeholder={placeholder}/>
        </>
    )
}