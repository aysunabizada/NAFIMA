import { Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import Main from "./component/main/Main"
import ErrorPage from "./component/error/ErrorPage"
import FAQ from "./component/main/FAQ"

function App() {
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
