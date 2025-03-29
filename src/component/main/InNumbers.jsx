import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

function InNumbers() {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        setStartCount(true);
    }, [])
    
    return (
        <>
            {/* NAFIMA in numbers*/}
            <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
                <div className="mx-auto pb-5 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        NAFİMA - Dəstəyimiz Rəqəmlərlə
                    </h2>
                    <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                        Zorakılıqla mübarizədə güc birlikdədir!
                    </p>
                </div>
                <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-12">
                    <div className="flex flex-col">
                        <dt className="order-2 mt-2 text-xs leading-6 text-indigo-200">Fərqli bölgələrdə <br /> xidmətlər</dt>
                        <dd className="order-1 text-6xl font-bold tracking-tight text-white">
                            {startCount && <CountUp start={0} end={50} duration={2} />}+
                        </dd>
                    </div>
                    <div className="mt-10 flex flex-col sm:mt-0">
                        <dt className="order-2 mt-2 text-xs leading-6 text-indigo-200">Günün istənilən <br /> vaxtı dəstək</dt>
                        <dd className="order-1 text-6xl font-bold tracking-tight text-white">24/7</dd>
                    </div>
                    <div className="mt-10 flex flex-col sm:mt-0">
                        <dt className="order-2 mt-2 text-xs leading-6 text-indigo-200"> Yardım göstərilən <br /> fərdlərin sayı</dt>
                        <dd className="order-1 text-6xl font-bold tracking-tight text-white">
                            {startCount && <CountUp start={0} end={10000} duration={2} />}+
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    )
}

export default InNumbers