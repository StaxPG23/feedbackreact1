import { useState } from "react"
import { usePoint } from "../context/PointContext";

export default function Feedback() {
    const [state, setState ] = useState('flex');
    const [point ,setPoint ] = useState(0)
    const [number, setNumber ] = useState([1,2,3,4,5,6,7,8,9,10])
    // const [data ,setData ] = useState({});
    let { updateData} = usePoint();

    function changeState(){
        if(state === 'flex'){
            setState('hidden')
        }
        else {
            setState('flex')
        }
    }

    function getData() {
        updateData(point);
        setState('hidden');
    }

    return (
        <div className={`w-3/5 mx-auto bg-violetDark text-slate-200 ${state} flex-col items-center gap-5 rounded-2xl xl:w-2/4`}>
            <h1 className="text-center text-3xl max-w-2xl mt-4">How likely are you to recommend FrontendPro to someone you know?</h1>
            <div className="flex flex-row flex-1 text-2xl w-4/5 justify-between xl:w-2/4">
                {
                    number.map((el,idx)=> (
                        <div key={idx} className="bg-violetDarkEx w-10 text-center py-1 px-2 rounded text-slate-400 hover:text-slate-200 hover:cursor-pointer hover:border-slate-200"
                        onClick={()=> setPoint(el)}
                        >{el}</div>
                    ))
                }
            </div>
            <div className="flex justify-between w-4/5 xl:w-2/4">
                <p>Unlikely</p> <p>Extreme Likely</p>
            </div>
            <div className="flex justify-between w-4/5 mb-4 xl:w-2/4">
                <button onClick={changeState} className="btn-primary">Cancel</button> <button onClick={getData} className="btn-primary">Submit</button>
            </div>
        </div>
    )
}