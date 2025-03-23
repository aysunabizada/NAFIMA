import { Route, Routes, useLocation } from "react-router";
import Layout from "./layout/Layout";
import Main from "./component/main/Main";
import ErrorPage from "./component/error/ErrorPage";
import FAQ from "./component/main/FAQ";
import { useEffect } from "react";

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
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
