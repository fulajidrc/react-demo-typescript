const ValidateError = ({error=''}) => {
    return(
        <>
            <div className="text-red-600 text-xs font-mono mt-2">{error}</div>
        </>
    )
}

export default ValidateError;