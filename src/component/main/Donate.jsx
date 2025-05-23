import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';

function Donate() {
    const [selected, setSelected] = useState('onetime');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        document.title = "İanə edin - NAFİMA"
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleButtonClick(value){
        const numericValue = parseFloat(value);
        const currentAmount = parseFloat(amount) || 0;
        const newAmount = currentAmount + numericValue;
        setAmount(newAmount.toString());
    };

    function handleInputChange(e){
        const val = e.target.value;
        if (/^\d*\.?\d*$/.test(val)) {
            setAmount(val);
        }
    };

    return (
        <main className="bg-[#F5F5F5]">
            <div className="relative">
                <div data-aos="fade-zoom-in" data-aos-duration="1500" className="lg:absolute lg:inset-0 pointer-events-none">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <DotLottieReact
                            src="https://lottie.host/f8803738-dcf3-47a3-8984-0002e8cd5575/kO81QeoQyR.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className="py-16 px-3 sm:py-20 lg:mx-auto lg:grid container lg:grid-cols-2 lg:py-20">
                    <div className="lg:pr-8">
                        <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-wide sm:text-5xl"><span className='text-[#81689D]'>Dəstəyinizlə</span> Həyatları Dəyişdirin! 💜</h2>
                            <p className="text-md text-gray-700 mt-5">
                                <i className='block font-semibold'>Hər ianə bir ümid hədiyyəsidir.</i> Sizin ianələriniz ilə daha çox insana kömək edə,
                                onların səsini eşidə və həyatlarını yaxşılaşdıra bilərik!
                            </p>
                            <form action={''} onSubmit={handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <button
                                    onClick={() => setSelected('onetime')}
                                    className={`rounded-full w-full cursor-pointer transition-all duration-300 font-semibold tracking-wider p-3.5 text-lg border-2 
                                        ${selected === 'onetime'
                                            ? 'bg-[#474F7A] text-white border-[#474F7A]'
                                            : 'bg-white text-[#474F7A] border-[#474F7A] hover:bg-[#474F7A] hover:text-white active:scale-95'} `} >
                                    Birdəfəlik
                                </button>
                                <button
                                    onClick={() => setSelected('monthly')}
                                    className={`rounded-full w-full cursor-pointer transition-all duration-300 font-semibold tracking-wider p-3.5 text-lg border-2 
                                        ${selected === 'monthly'
                                            ? 'bg-[#474F7A] text-white border-[#474F7A]'
                                            : 'bg-white text-[#474F7A] border-[#474F7A] hover:bg-[#474F7A] hover:text-white active:scale-95'}`}>
                                    Aylıq
                                </button>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                                            Adı, Soyadı
                                        </label>
                                        <span className="text-sm text-gray-500">
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            id="text"
                                            type="text"
                                            className="block w-full p-3 shadow-gray-500 shadow-xs rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email ünvanı <span className='text-[red]'>*</span>
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full p-3 shadow-gray-500 shadow-xs rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Əlaqə nömrəsi
                                        </label>
                                        <span id="phone-description" className="text-sm text-gray-500">
                                            Optional
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            aria-describedby="phone-description"
                                            className="block w-full p-3 shadow-gray-500 shadow-xs rounded-md border-gray-300 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                                            Bu gün niyə ianə etdiyinizi qeyd edin:
                                        </label>
                                        <span id="how-can-we-help-description" className="text-sm text-gray-700">
                                            Optional (max. 250 simvol)
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="how-can-we-help"
                                            name="how-can-we-help"
                                            aria-describedby="how-can-we-help-description"
                                            rows={4}
                                            className="block w-full p-3 shadow-gray-500 shadow-xs rounded-md border-gray-300 sm:text-sm"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                                <fieldset className="sm:col-span-2">
                                    <legend className="block text-sm font-medium text-gray-700">Zəhmət olmasa, ianə məbləğinizi yazın. <span className='text-[red]'>*</span></legend>
                                    <input
                                        onChange={handleInputChange}
                                        value={amount}
                                        type="text"
                                        name="donate"
                                        id="donate"
                                        className="block w-full p-3 mt-2 shadow-gray-500 shadow-xs rounded-md border-gray-300 sm:text-sm"
                                    />
                                    <div className="mt-4 grid grid-cols-4 gap-x-2">
                                        {['10', '25', '50', '100'].map((val) => (
                                            <button
                                                key={val}
                                                onClick={() => handleButtonClick(val)}
                                                className="border hover:scale-95 rounded-md p-2 cursor-pointer bg-gray-200 transition-all duration-300 font-semibold"
                                            >
                                                {val} ₼
                                            </button>
                                        ))}
                                    </div>
                                    {/* <button className='border hover:scale-95 rounded-md p-2 cursor-pointer bg-gray-200 transition-all duration-300 font-semibold'>10 ₼</button>
                                        <button className='border hover:scale-95 rounded-md p-2 cursor-pointer bg-gray-200 transition-all duration-300 font-semibold'>25 ₼</button>
                                        <button className='border hover:scale-95 rounded-md p-2 cursor-pointer bg-gray-200 transition-all duration-300 font-semibold'>50 ₼</button>
                                        <button className='border hover:scale-95 rounded-md p-2 cursor-pointer bg-gray-200 transition-all duration-300 font-semibold'>100 ₼</button> */}
                                </fieldset>
                                <div className="relative flex items-start border-y w-full border-gray-300 py-4">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="comments"
                                            aria-describedby="comments-description"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="comments" className="font-medium text-nowrap text-gray-700">
                                            Adımın anonim qalmasını istəyirəm.
                                        </label>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                                        NAFİMA haqqında hardan eşitmisən?
                                    </label>
                                    <div className="mt-1">
                                        <select
                                            id="location"
                                            name="location"
                                            className="mt-1 block w-full p-3.5 shadow-gray-500 shadow-xs rounded-md border-gray-300 sm:text-sm"
                                            defaultValue="Canada"
                                        >
                                            <option value="" disabled selected>Seçin...</option>
                                            <option value="social_media">Sosial media (Instagram, Facebook, Twitter və s.)</option>
                                            <option value="website">İnternet axtarışı nəticəsində</option>
                                            <option value="friend">Dost və ya ailə üzvü</option>
                                            <option value="event">Tədbir və ya seminar</option>
                                            <option value="news">Xəbər və ya məqalə</option>
                                            <option value="ngo">Digər qeyri-hökumət təşkilatı (QHT)</option>
                                            <option value="other">Digər</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <button
                                        type="submit"
                                        className="inline-flex py-3 px-10 tracking-wider rounded-md border-transparent bg-[#535C91] font-semibold text-white shadow-sm hover:bg-[#81689D] cursor-pointer transition-all duration-300 active:scale-95"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Donate