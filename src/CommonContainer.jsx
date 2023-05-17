import Footer from "./components/Footer"
import HeaderHome from "./pages/HomePage/1Header"
// import Header from "./components/Header"

const CommonContainer = ({ children }) => {
    return (
        <>
            <HeaderHome />
            {children}
            <Footer />
        </>
    )
}

export default CommonContainer