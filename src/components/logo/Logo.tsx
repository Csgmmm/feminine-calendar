import myLogo from "../assets/logo.svg"

function Logo() {
    return (
        <>
        <img className="theLogo" src={myLogo} alt="logo" width={42} />
        </>
    )
}

export default Logo