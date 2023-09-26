import { useEffect, useState } from "react"
import { usePoint } from "../context/PointContext"

export default function Points() {
    const { data } = usePoint()
    const [ display, setDisplay ] = useState('hidden') 
    
    useEffect(() =>{
        if (data > 0) {
            setDisplay('flex');
        }
    },[data])

    return (
        <div className = {`text-8xl w-full ${display} justify-center`}>
            <p>{`Thank You for giving us ${data} Points`}</p>
        </div>
    )
}