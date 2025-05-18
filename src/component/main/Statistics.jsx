import { Link } from "react-router"

function Statistics() {
    return (
        <main>
            <div className="py-[3rem] gradient1">
                <div className="container text-white md:text-start text-center">
                    <Link className="hover:underline" to={'/'}>Ana səhifə </Link>{' > '}
                    <Link className="hover:underline" to={'/whatIsAbuse'}> Zorakılıq nədir?</Link>{' > '}
                    <span className="hover:underline cursor-pointer"> Zorakılıq nə qədər yayğındır?</span>
                </div>
            </div>
        </main>
    )
}

export default Statistics