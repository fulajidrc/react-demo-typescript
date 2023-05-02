import { ButtonModel } from "@/interfaces/button.interface"
import { LoadderIcon } from "../icons/LoadderIcon"

function Button({text, type, onClick = () => {}, processingStatus = true, color="indigo"}:ButtonModel) {
    return (
        <>
            <button className={`w-full h-10 px-6 font-semibold rounded-md text-white bg-${color}-500 hover:bg-${color}-700`} type={type} onClick={onClick} disabled={processingStatus}>
                {processingStatus ? <>
                    <div className="flex items-center">
                        <LoadderIcon />
                        Processing...
                    </div>
                </> : <>
                    {text}
                </>}
                
                
            </button>
        </>
    )
}
  
export default Button