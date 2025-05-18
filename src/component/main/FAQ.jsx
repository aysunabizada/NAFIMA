import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

const faqs = [
    {
        question: "NAFİMA nədir və nə iş görür?",
        answer:
            "NAFİMA, zorakılıqdan əziyyət çəkən insanlara məxfi və təhlükəsiz şəkildə dəstək verən bir platformadır. Biz fərdlərə hüquqi, psixoloji və sosial dəstək təqdim edirik.",
    },
    {
        question: "Xidmətləriniz tam məxfidirmi?",
        answer:
            "Bəli, NAFİMA tam məxfilik prinsipi ilə işləyir. Şəxsi məlumatlarınız heç bir halda üçüncü tərəflərlə paylaşılmır.",
    },
    {
        question: "Necə kömək ala bilərəm?",
        answer:
            "Bizimlə əlaqə saxlamaq üçün zəng edə, onlayn söhbət edə və ya mesaj göndərə bilərsiniz. Əgər buna hazır deyilsinizsə, Yardım alın bölməsində ərazinizdəki resurslar haqqında məlumat tapa bilərsiniz.",
    },
    {
        question: "Hüquqi yardım göstərirsinizmi?",
        answer:
            "Bəli, sizə hüquqi məsləhətlər və lazım olduqda yönləndirmələr təqdim edirik.",
    },
    {
        question: "Xidmətləriniz ödənişlidirmi?",
        answer:
            "Xeyr, NAFİMA tərəfindən göstərilən bütün xidmətlər tamamilə ödənişsizdir.",
    },
    {
        question: "Mənə uyğun dəstək xidmətini necə tapa bilərəm?",
        answer:
            "Saytımızın Yardım alın bölməsində ərazinizdə mövcud olan dəstək xidmətlərini tapa bilərsiniz. Sən tək deyilsən – biz buradayıq! 💙",
    },
]

function FAQ() {
    useEffect(() => {
        document.title = "Tez-tez verilən suallar - NAFİMA"
    },[])

    return (
        <main className="bg-[#31304D] text-white">
            <div className="py-20 sm:py-32 lg:py-20 lg:px-0">
                <div className="container divide-y divide-gray-600">
                    <h2 className="text-3xl pb-2 font-bold leading-10 tracking-tight">Tez-tez verilən suallar</h2>
                    <dl data-aos="fade-down" data-aos-duration="1500" className="mt-10 space-y-6 divide-y divide-gray-600">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start cursor-pointer px-3 py-5 bg-[#161A30] rounded-t-xl justify-between text-left">
                                                <span className="text-md font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 p-3 text-gray-400">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>

            <div className="container py-12 lg:py-16">
                <div className="rounded-xl bg-[#161A30] py-10 sm:py-16 lg:flex lg:items-center lg:py-20 px-10">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white">İrad və təklifləriniz üçün bizə yaza bilərsiniz!</h2>
                        <p className="mt-4 max-w-3xl text-xs text-indigo-100">
                            Fikirləriniz bizim üçün önəmlidir. <br /> Bizə müraciət edərək platformamızın inkişafına kömək edə bilərsiniz.
                        </p>
                    </div>
                    <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-md bg-white border-white text-black px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                                placeholder="Email adresinizi yazın"
                            />
                            <button
                                type="submit"
                                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-[#a93d92] px-5 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#81689D] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                            >
                                Göndər
                            </button>
                        </form>
                        <p className="mt-3 text-sm text-indigo-100">
                            Biz məlumatlarınızın qorunmasına əhəmiyyət veririk. <br />
                            <a href="#" className="font-medium tracking-wider text-white underline">
                                Məxfilik Siyasətimizi oxuyun.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FAQ