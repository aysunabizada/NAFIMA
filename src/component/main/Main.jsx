import { ChatBubbleLeftRightIcon, FaceSmileIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router';
import bg from '../../assets/img/GettyImages_1200658642.webp';

function Main() {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        setStartCount(true);
    }, [])

    return (
        <>
            <main className="bg-[#31304D] text-white">
                <div className="relative min-h-[85vh]">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src={bg}
                            alt="bg"
                        />
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                    </div>
                    <div className="relative container py-16 sm:py-24">
                        <h1 className="text-4xl font-bold tracking-widest text-white md:text-5xl lg:text-6xl">NAFİMA</h1>
                        <span className='text-lg italic tracking-wider text-[#81689D]'>Səssizləri eşit, ədaləti yaşat!</span>
                        <p className="mt-6 sm:h-[3vh] h-[80vh] max-w-7xl text-lg text-gray-300">
                            Biz 24/7 məxfi şəkildə zorakılıqdan əziyyət çəkən hər kəsə dəstək oluruq. Yüksək müraciət səbəbindən cavab gecikə bilər.
                            Təhlükəsiz gözləyə bilmirsinizsə və ya əlaqə saxlamağa hazır deyilsinizsə,
                            Yardım alın bölməsindən ərazinizdəki resurslar və dəstək xidmətləri barədə məlumat əldə edə bilərsiniz.
                            <br /> <b>Unutma, sən tək deyilsən – biz buradayıq!</b>
                        </p>
                    </div>
                </div>

                {/* Overlapping cards */}
                <section className="relative z-10 mx-auto -mt-32 max-w-[85rem] px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
                    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                        <Link to='tel:+99450XXXXXXX' className="box flex hover:scale-105 transition-all duration-500 flex-col rounded-2xl bg-white shadow-xl">
                            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#81689D] p-5 shadow-lg icon">
                                    <PhoneIcon className="h-12 w-12 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900">Zəng Et</h3>
                                <p className="mt-4 text-base text-gray-500">Zəng etmək üçün kliklə +994 XX XXX XX XX</p>
                            </div>
                        </Link>
                        <Link to='https://wa.me/+99450XXXXXXX' className="box flex hover:scale-105 transition-all duration-500 flex-col rounded-2xl bg-white shadow-xl">
                            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#81689D] p-5 shadow-lg icon">
                                    <ChatBubbleLeftRightIcon className="h-12 w-12 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900">Bizə Yazın</h3>
                                <p className="mt-4 text-base text-gray-500">Xidmətlərimiz həmişə pulsuzdur və 24/7 mövcuddur. Bizə yazın və cavab alın.</p>
                            </div>
                        </Link>
                        <Link to='https://chatgpt.com' className="box flex hover:scale-105 transition-all duration-500 flex-col rounded-2xl bg-white shadow-xl">
                            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-[#81689D] p-5 shadow-lg icon">
                                    <FaceSmileIcon className="h-12 w-12 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-3xl font-semibold text-gray-900">AI Chat</h3>
                                <p className="mt-4 text-base text-gray-500">Xidmət yaxın zamanda aktiv olacaq.</p>
                            </div>
                        </Link>
                    </div>
                </section>
                <section className="pt-16 lg:py-24">
                    <div className="bg-[#161A30] pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                {/* <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" /> */}
                                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                    <div className="aspect-w-10 pt-5 lg:pt-0 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <img
                                            className="object-cover lg:h-full rounded-xl lg:w-full"
                                            src="https://www.psychotherapynetworker.org/wp-content/uploads/2022/07/iStock.-salim-hanzaz.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                                    <blockquote>
                                        <div>
                                            <svg
                                                className="h-12 w-12 text-white opacity-25"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="mt-6 text-lg font-medium text-white">
                                                Uzun müddət susurdum, çünki qorxurdum və anlaşılmayacağımı düşünürdüm. Zorakılıq yalnız fiziki deyil, psixoloji yükü daha ağır olur. Dəstək almaq mənim üçün dönüş nöqtəsi oldu – məni günahlandıran yox, anlayan insanlar tapdım.
                                                Artıq bilirəm ki, səssiz qalmaq çıxış yolu deyil, əsl güc danışmaqdan başlayır!
                                            </p>
                                        </div>
                                        <footer className="mt-6">
                                            <p className="text-sm text-white">Ailə zorakılığından əziyyət çəkən biri</p>
                                            <p className="text-base font-medium text-indigo-100">Anonim</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
            </main>
        </>
    )
}

export default Main