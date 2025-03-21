import { ChatBubbleLeftRightIcon, FaceSmileIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router';

function Main() {
    return (
        <>
            <main className="bg-[#31304D] text-white">
                <div className="relative min-h-[80vh]">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19833176/GettyImages_1200658642.jpg?quality=90&strip=all&crop=0,13.346404083332,100,73.307191833337"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                    </div>
                    <div className="relative container py-24 sm:py-24">
                        <h1 className="text-4xl font-bold tracking-widest text-white md:text-5xl lg:text-6xl">NAFİMA</h1>
                        <span className='text-lg italic tracking-wider text-[#81689D]'>Səssizləri eşit, ədaləti yaşat!</span>
                        <p className="mt-6 max-w-7xl text-xl text-gray-300">
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
            </main>
        </>
    )
}

export default Main