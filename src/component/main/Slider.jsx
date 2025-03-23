import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                pagination={{
                    true: true,
                    clickable: true
                }}
                className="mySwiper bg-[#161A30] rounded-xl"
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
            >

                <SwiperSlide>
                    {/* <div className="bg-[#161A30] pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
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
                    </div> */}
                    <div className="overflow-hidden py-12 md:py-20 lg:py-24">
                        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                            <svg
                                className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                                width={404}
                                height={404}
                                fill="none"
                                viewBox="0 0 404 404"
                                role="img"
                                aria-labelledby="svg-workcation"
                            >
                                <title id="svg-workcation">Workcation</title>
                                <defs>
                                    <pattern
                                        id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-800" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                            </svg>
                            <div className="relative">
                                <blockquote className="mt-10">
                                    <div className="mx-auto text-white max-w-3xl text-center sm:text-xl text-lg font-medium leading-9">
                                        <p>
                                            &ldquo;Uzun müddət susurdum, çünki qorxurdum və anlaşılmayacağımı düşünürdüm. Zorakılıq yalnız fiziki deyil, psixoloji yükü daha ağır olur. Dəstək almaq mənim üçün dönüş nöqtəsi oldu – məni günahlandıran yox, anlayan insanlar tapdım.
                                            Artıq bilirəm ki, səssiz qalmaq çıxış yolu deyil, əsl güc danışmaqdan başlayır!&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="md:flex md:items-center md:justify-center">
                                            <div className="md:flex-shrink-0">
                                                <img
                                                    className="mx-auto h-10 w-10 object-cover rounded-full"
                                                    src="https://as1.ftcdn.net/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg"
                                                    alt="user"
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                <div className="text-base font-medium text-gray-200">Anonim</div>
                                                <svg className="mx-1 hidden h-5 w-5 text-[#a93d92] md:block" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M11 0h3L9 20H6l5-20z" />
                                                </svg>
                                                <div className="text-base font-medium text-gray-500">Zərərçəkən</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="bg-[#161A30] pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                    <div className="aspect-w-10 pt-5 lg:pt-0 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <img
                                            className="object-cover lg:h-full rounded-xl lg:w-full"
                                            src="https://static.vecteezy.com/system/resources/previews/003/432/180/non_2x/a-big-fist-threatens-a-woman-girl-protects-herself-stop-the-violence-vector.jpg"
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
                                                Ailəmdən şiddət görürdüm. Həyatımı dəyişdirmək üçün dəstək almağa qərar verdim. Mənim üçün ən çətin addım dəstək almaq oldu. Dəstək almadan öncə həyatımı düzəltmək üçün nələr etməli olduğumu bilmirdim. Dəstək almaq mənim üçün dönüş nöqtəsi oldu.
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
                    </div> */}
                    <div className="overflow-hidden py-12 md:py-20 lg:py-24">
                        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                            <svg
                                className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                                width={404}
                                height={404}
                                fill="none"
                                viewBox="0 0 404 404"
                                role="img"
                                aria-labelledby="svg-workcation"
                            >
                                <title id="svg-workcation">Workcation</title>
                                <defs>
                                    <pattern
                                        id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-800" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                            </svg>
                            <div className="relative">
                                <blockquote className="mt-10">
                                    <div className="mx-auto text-white max-w-3xl text-center sm:text-xl text-lg font-medium leading-9">
                                        <p>
                                            &ldquo;Ailəmdən şiddət görürdüm. Həyatımı dəyişdirmək üçün dəstək almağa qərar verdim. Mənim üçün ən çətin addım dəstək almaq oldu. Dəstək almadan öncə həyatımı düzəltmək üçün nələr etməli olduğumu bilmirdim. Dəstək almaq mənim üçün dönüş nöqtəsi oldu.&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="md:flex md:items-center md:justify-center">
                                            <div className="md:flex-shrink-0">
                                                <img
                                                    className="mx-auto h-10 w-10 object-cover rounded-full"
                                                    src="https://as1.ftcdn.net/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg"
                                                    alt="user"
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                <div className="text-base font-medium text-gray-200">Anonim</div>
                                                <svg className="mx-1 hidden h-5 w-5 text-[#a93d92] md:block" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M11 0h3L9 20H6l5-20z" />
                                                </svg>
                                                <div className="text-base font-medium text-gray-500">Zərərçəkən</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className="bg-[#161A30] pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                    <div className="aspect-w-10 pt-5 lg:pt-0 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                        <img
                                            className="object-cover lg:h-full rounded-xl lg:w-full"
                                            src="https://static.vecteezy.com/system/resources/previews/003/432/180/non_2x/a-big-fist-threatens-a-woman-girl-protects-herself-stop-the-violence-vector.jpg"
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
                                                Ailəmdən şiddət görürdüm. Həyatımı dəyişdirmək üçün dəstək almağa qərar verdim. Mənim üçün ən çətin addım dəstək almaq oldu. Dəstək almadan öncə həyatımı düzəltmək üçün nələr etməli olduğumu bilmirdim. Dəstək almaq mənim üçün dönüş nöqtəsi oldu.
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
                    </div> */}
                    <div className="overflow-hidden py-12 md:py-20 lg:py-24">
                        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                            <svg
                                className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
                                width={404}
                                height={404}
                                fill="none"
                                viewBox="0 0 404 404"
                                role="img"
                                aria-labelledby="svg-workcation"
                            >
                                <title id="svg-workcation">Workcation</title>
                                <defs>
                                    <pattern
                                        id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-800" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                            </svg>
                            <div className="relative">
                                <blockquote className="mt-10">
                                    <div className="mx-auto text-white max-w-3xl text-center sm:text-xl text-lg font-medium leading-9">
                                        <p>
                                            &ldquo;
                                            İllərlə zorakılığa dözdükdən sonra qarşıma NAFİMA çıxdı. Bu addımı atmaq mənə çətin gəlirdi, fəqət onlar mənə qol-qanad oldular. Yaxşı ki, varsız NAFİMA ailəsi. Həyatıma yenidən günəş doğdu!&rdquo;
                                        </p>
                                    </div>
                                    <footer className="mt-8">
                                        <div className="md:flex md:items-center md:justify-center">
                                            <div className="md:flex-shrink-0">
                                                <img
                                                    className="mx-auto h-10 w-10 object-cover rounded-full"
                                                    src="https://as1.ftcdn.net/jpg/02/01/33/54/1000_F_201335438_CNpY0iWaXXAV95Gj8BPB0tEJlMcxWeaZ.jpg"
                                                    alt="user"
                                                />
                                            </div>
                                            <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                                <div className="text-base font-medium text-gray-200">Anonim</div>
                                                <svg className="mx-1 hidden h-5 w-5 text-[#a93d92] md:block" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M11 0h3L9 20H6l5-20z" />
                                                </svg>
                                                <div className="text-base font-medium text-gray-500">Zərərçəkən</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
