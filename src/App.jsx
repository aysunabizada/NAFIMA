import { Route, Routes, useLocation } from "react-router";
import Layout from "./layout/Layout";
import Main from "./component/main/Main";
import ErrorPage from "./component/error/ErrorPage";
import FAQ from "./component/main/FAQ";
import { useEffect } from "react";
import About from "./component/main/About";
import Donate from "./component/main/Donate";

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
        document.title = "NAFİMA - Səssizləri eşit, ədaləti yaşat!"
    }, [pathname]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Main />} />
                    <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/donate" element={<Donate />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
