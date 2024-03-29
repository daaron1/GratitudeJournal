import { useState } from "react"

export default function Input({handleSubmit}){
    const [value, setValue]=useState("")

    let submitForm = e => {
        e.preventDefault()
        handleSubmit(value)
        setValue("")
    }

    return(
        <form onSubmit={submitForm} className="p-10" >
            <input placeholder="Enter Gratitude" type ="text" value={value} onChange={e =>setValue(e.target.value)} className="rounded px-3 py-2 shadow-inner">

            </input>
            <button type="submit" className = "bg-pink-300 rounded px-12 py-2">Save</button>
        </form>
    )
}
