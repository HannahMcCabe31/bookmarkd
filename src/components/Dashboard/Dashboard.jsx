import {useState, useEffect} from "react"
function Dashboard() {
    // We are checking if it is mobile
    const [isMobile, setIsMobile] = useState(false) 
    console.log(isMobile)
    useEffect(()=>{
        const handleResize = () => {
        const windowWidth = window.innerWidth
        if(windowWidth < 450){
            console.log("Mobile")
            setIsMobile(true)
        }else{
            setIsMobile(false)
            console.log("Desktop")
        }}
        window.addEventListener("resize",handleResize)
        return ()=>{window.removeEventListener("resize",handleResize)}
    },[])
    return (
        <div>
            {isMobile? (<h1>Mobile</h1>)
        :(<h1>Desktop</h1>)}
            <h1 className="text-white">Dashboard</h1>
        </div>
    );
}

export default Dashboard;