import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function PrivacyPolicy() {
    useEffect(() => {
        document.title = "Gizlilik siyasətimiz - NAFİMA"
    }, [])

    const [agreed, setAgreed] = useState(false);

    return (
        <main className="bg-[#31304D] text-white">
            <div className="container">
                <div className="p-6 py-12 mx-auto space-y-24 lg:px-8">
                    <div data-aos="fade-zoom-in" data-aos-duration="1500">
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-[#fff]">Gizlilik Siyasəti</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">Bizimlə yolunu paylaş</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-200">NAFİMA Rəqəmsal Xidmətləri</h3>
                            <p className="mt-3 text-lg dark:text-gray-300">NAFİMA olaraq biz, ailə zorakılığı və gender əsaslı problemlərlə mübarizə aparan hər kəsə təhlükəsiz və məxfi dəstək göstərmək üçün buradayıq. Rəqəmsal xidmətlərimiz vasitəsilə bizə müraciət edən şəxslərin gizliliyi və təhlükəsizliyi bizim üçün ön plandadır.</p>
                            <div className="mt-12 space-y-12">
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 dark:text-gray-200">🔒 Anonim Rəqəmsal Xidmət</h4>
                                    <p className="mt-2 dark:text-gray-300">NAFİMA-nın rəqəmsal xidmətlərindən anonim istifadə mümkündür. Bu, istifadəçi ilə NAFİMA komandası arasında baş verən bir dəfəlik və məxfi ünsiyyət deməkdir. Bu zaman istifadəçidən heç bir şəxsiyyət təsdiqi və ya şəxsi məlumat tələb olunmur.</p>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 dark:text-gray-200">🌐 Rəqəmsal Xidmətlərə Nələr Daxildir?</h4>
                                    <div className="mt-2 dark:text-gray-300">Bizim rəqəmsal xidmətlərimizə aşağıdakılar daxildir:
                                        <ul className='list-disc ml-8'>
                                            <li className='my-3'>Veb sayt üzərindən mesaj göndərmə və ya canlı dəstək</li>
                                            <li className='my-3'>Sosial media platformaları (Instagram, Facebook və s.)</li>
                                            <li className='my-3'>NAFİMA bloqu və şərh bölmələri</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold leading-6 dark:text-gray-200">🛡️ Təhlükəsizlik və Məxfilik</h4>
                                    <p className="mt-2 dark:text-gray-300">Rəqəmsal xidmətlərimizdən istifadə etməklə siz, məxfilik siyasətimizi qəbul etmiş olursunuz. Əgər hər hansı bir məqamda rəqəmsal ünsiyyətin sizin təhlükəsizliyinizə və ya gizliliyinizə risk yaratdığını düşünürsünüzsə, biz sizə daha güvənli əlaqə üsulu – məsələn, telefon dəstəyi vasitəsilə də yardım göstərməyə hazırıq.</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-duration="1500" aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://www.sassmm.org/uploads/1/1/7/6/117604982/december-sm_orig.png" alt="" className="rounded-lg w-[100%] brightness-50" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div data-aos="fade-zoom-in" data-aos-duration="1500" className="lg:col-start-2">
                                <h3 className="text-lg font-bold tracking-tight dark:text-gray-200">🚫 İmtina (Opt-Out) Siyasəti</h3>
                                <div className="mt-3 dark:text-gray-300">NAFİMA, istifadəçilərə lazım olduqda və mümkün olduğu hallarda rəqəmsal xidmətlərdən imtina etmək imkanı təqdim edir. Bu seçimlərə aşağıdakılar daxildir:
                                    <ul className='list-disc ml-8 mt-3'>
                                        <li className='my-2'>Rəqəmsal xidmətlərdə iştirak azadlığı</li>
                                        <li className='my-2'>Dəstək prosesi zamanı şəxsi və tanıdıcı məlumatlar təqdim etməmək</li>
                                    </ul>
                                </div>
                                <div className="mt-12 space-y-12">
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold leading-6 dark:text-gray-200">🧑‍💻 Məxfi və Anonim Çat</h4>
                                        <div className="mt-2 dark:text-gray-300">NAFİMA-nın canlı çat xidmətləri təhlükəsiz platformalar üzərindən təqdim olunur. Çat zamanı istifadəçidən ad və digər şəxsi məlumatlar istəyə bilərik — bu yalnız xidmət keyfiyyətini artırmaq və dəstək prosesini asanlaşdırmaq üçündür. Əlavə olaraq, bağlantının qurulması üçün IP ünvan da tələb oluna bilər.
                                            İstəyə bağlı olaraq toplanan məlumatlara bunlar daxil ola bilər:
                                            <ul className='list-disc ml-8 mt-3'>
                                                <li className='my-2'>Təşkilat adı (əgər varsa)</li>
                                                <li className='my-2'>Cins</li>
                                                <li className='my-2'>Yaş</li>
                                                <li className='my-2'>Şəhər və rayon</li>
                                                <li className='my-2'>Poçt kodu</li>
                                                <li className='my-2'>Xidmət haqqında necə məlumat əldə etdiyiniz</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold leading-6 dark:text-gray-200">⚖️ Hüquqi Açıqlama (Legal Disclosure)</h4>
                                        <p className="mt-2 dark:text-gray-300">NAFİMA, aşağıdakı hallarda şəxsi identifikasiya edilə bilən məlumatlara çıxış edə və ya onları təqdim edə bilər:\
                                            <ul className='list-disc ml-8 mt-3'>
                                                <li className='my-3'>💼 Qanunvericiliyin tələbinə əsasən</li>
                                                <li className='my-3'>📄 Rəsmi hüquqi proseslərə cavab olaraq</li>
                                                <li className='my-3'>⚖️ Hüquqi öhdəliklərə riayət etmək məqsədilə</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold leading-6 dark:text-gray-200">💝 İanələr (Donations)</h4>
                                        <p className="mt-2 dark:text-gray-300">NAFİMA platformasında ianə etdiyiniz zaman, əməliyyatı yerinə yetirmək üçün şəxsi məlumatlarınızın bir hissəsini üçüncü tərəflərlə paylaşmalı oluruq. Bu hallarda:
                                            <ul className='list-disc ml-8 mt-3'>
                                                <li className='my-4'>💳 Kredit kartı məlumatlarınız, ödənişi icra etmək üçün istifadə etdiyimiz etibarlı və təhlükəsiz ödəniş prosessorlarına ötürülür.</li>
                                                <li className='my-4'>🛡️ Bu xidmət təminatçıları şəxsi məlumatlarınızı yalnız ödənişin həyata keçirilməsi məqsədilə istifadə edə bilər.</li>
                                                <li className='my-4'>🔒 Sizin icazəniz olmadan, şəxsi məlumatlarınız heç bir halda üçüncü tərəflərlə marketinq məqsədilə paylaşılmır.</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1500" className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://uniswales.ac.uk/sites/default/files/styles/large/public/2023-11/women-g58d42354c_1920.jpg?h=a71d9e32&itok=F6GcmJiI" alt="" className="brightness-50 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F5F5]">
                <div data-aos="zoom-in" data-aos-duration="1500" className="mx-auto max-w-7xl px-12 xl:px-0 flex flex-col lg:flex-row gap-8 py-24">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-[#474F7A]">Bizimlə əlaqə saxlayın</h2>
                        <p className="mt-6 max-w-3xl text-lg text-gray-500">
                            Hər hansı bir sualınız varsa, bizə yazmaqdan çəkinməyin. 💜
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Bakı ofisi</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    <Link to='tel:(+994)50XXXXXXX' className="hover:text-[#81689D]">(+994) 50 XXX XX XX</Link>
                                    <span className="block">203 Nizami St, Baku</span>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Xırdalan ofisi</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    <Link to='tel:(+994)50XXXXXXX' className="hover:text-[#81689D]">(+994) 50 XXX XX XX</Link>
                                    <span className="block">Heydər Əliyev, Xırdalan. 40.451451</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.5178179933946!2d49.85149987548096!3d40.37735815803554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d077c61fef3%3A0xfa4594c97092ca01!2sAF%20Business%20House!5e1!3m2!1str!2saz!4v1744746450141!5m2!1str!2saz"
                        // width="55%"
                        height="300"
                        className='w-[100%] lg:w-[55%]'
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AF Business House Map"
                    ></iframe>
                </div>
            </div>
            <div className="overflow-hidden bg-[#F0ECE5] py-16 px-6 lg:px-8 lg:py-24">
                <div data-aos="zoom-in" data-aos-duration="1500" className="relative mx-auto max-w-xl">
                    <svg
                        className="absolute left-full translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 -translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bizimlə əlaqə</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Sualın var? Fikirlərin bizimlə paylaş! 💜
                        </p>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Adınız
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md text-black border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                    Soyadınız
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full text-black rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                    Şirkət adı (əgər varsa)
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        className="block w-full text-black rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    E-mail ünvanı
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full text-black rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Telefon nömrəsi
                                </label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full text-black rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Bizə mesajınız
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full text-black rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            checked={agreed}
                                            onChange={setAgreed}
                                            className={classNames(
                                                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            By selecting this, you agree to the{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Cookie Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#81689D] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#a93d92] cursor-pointer transition-all duration-300 focus:ring-2 focus:ring-offset-2"
                                >
                                    Göndər
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PrivacyPolicy