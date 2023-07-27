import Logo from "../assets/img/Jobbix.png"

const Loading = () => {
    return (
        <div className="bg-[#00000080] flex items-center justify-center h-[100vh]">
            <div className="animate-myAnimacion">
                <img src={Logo} alt="logo" className="w-[180px]" />
            </div>
        </div>
    )
}

export default Loading
