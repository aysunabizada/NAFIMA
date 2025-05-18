import bg from '../../assets/img/domestic-violence-laws-for-women-punishment.jpg';
import { ExclamationCircleIcon, BookOpenIcon, BuildingLibraryIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import EmployeeSlider from './EmployeeSlider';
import InNumbers from './InNumbers';

const features = [
    {
        name: '24/7 məxfi dəstək xidməti',
        description:
            'Günün istənilən saatı, həftənin hər günü bizimlə anonim şəkildə əlaqə saxlaya bilərsiniz. Sizi dinləmək, baş verənləri dəyərləndirmək və ehtiyaclarınıza uyğun dəstək göstərmək üçün buradayıq.',
        icon: LockClosedIcon,
    },
    {
        name: 'Hüquqi və psixoloji məsləhətlərə yönləndirmə',
        description:
            'Zorakılığa məruz qaldığınız halda hansı hüquqlara sahib olduğunuzu, hansı dövlət qurumlarına və təşkilatlara müraciət edə biləcəyinizi sizə izah edirik. Zərurət yarandıqda sizi hüquqi yardımla təmin edən təşkilatlara yönləndiririk.',
        icon: BuildingLibraryIcon,
    },
    {
        name: 'Zərərçəkmişlər üçün məlumat bazası və maarifləndirici resurslar',
        description:
            'Cəmiyyət daxilində zorakılığın qarşısını almaq və insanların məlumatlılığını artırmaq məqsədilə onlayn seminarlar, təlimlər və sosial kampaniyalar təşkil edirik.',
        icon: BookOpenIcon,
    },
    {
        name: 'Ərazinizdəki yerli dəstək təşkilatları haqqında məlumat',
        description:
            'Ərazinizdə fəaliyyət göstərən sosial xidmətlər, sığınacaqlar, psixoloji dəstək mərkəzləri və hüquq müdafiə qurumları haqqında dolğun və aktual məlumat təqdim edirik. Sizin üçün ən yaxın və ən təhlükəsiz resursları tapmağa kömək edirik.',
        icon: ExclamationCircleIcon,
    },
]

function About() {
    return (
        <main className="bg-[#31304D] text-white">
            <section className="relative py-4">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24">
                    <div data-aos="fade-right" data-aos-duration="2000" className="relative sm:py-16 lg:py-0">
                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                                <img
                                    className="absolute inset-0 h-full w-full object-cover"
                                    src={bg}
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 opacity-90" />
                                <div className="relative px-8">
                                    <blockquote className="mt-8">
                                        <div className="relative text-lg font-normal text-white md:flex-grow">
                                            <svg
                                                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="relative">
                                                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                                                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                        <footer className="mt-4">
                                            <p className="text-base font-semibold text-indigo-200">Anonim</p>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                        <div className="pt-12 sm:pt-16 lg:pt-20">
                            <h2 className="text-3xl font-bold tracking-wide text-white sm:text-4xl">
                                Səssizləri eşit, ədaləti yaşat!
                            </h2>
                            <p className="text-xl mt-3 tracking-wider text-white">Biz kimik?</p>
                            <div className="mt-6 space-y-6 text-gray-500">
                                <p className="text-lg">
                                    NAFİMA zorakılığa məruz qalan insanların səsini eşitmək və onlara təhlükəsiz,
                                    məxfi şəkildə dəstək olmaq məqsədilə yaradılmış platformadır. Biz inanırıq ki, heç kim tək qalmamalıdır.
                                    Ən çətin anlarınızda yanınızda olmaq üçün buradayıq.
                                </p>
                                <p className="text-base leading-7">
                                    Bizim missiyamız zorakılıqdan əziyyət çəkən hər bir insana dayanmadan, şəfqətlə və peşəkar şəkildə dəstək olmaq, onların hüquqlarını qorumaq və güclü olduqlarını xatırlatmaqdır.
                                    Məqsədimiz həm fərdi, həm də cəmiyyət səviyyəsində zorakılıq anlayışını aradan qaldırmaq və təhlükəsiz bir gələcək qurmaqdır.
                                </p>
                                <p>Biz zorakılığın olmadığı, insanların qorxmadan yaşadığı, səslərinin eşidildiyi və dəstək almağın utanılacaq bir şey olmadığı bir cəmiyyət görmək istəyirik.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white/95 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div data-aos="fade-down" data-aos-duration="1500" className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Xidmətlərimiz
                        </p>
                        <p className="mt-6 text-md leading-8 text-gray-600">
                            NAFİMA olaraq zorakılıqdan əziyyət çəkən hər bir insana hərtərəfli, peşəkar və məxfi dəstək təqdim edirik.
                            Bizim xidmətlərimiz yalnız məlumat verməkdən ibarət deyil – biz sizə çıxış yolu göstərir, psixoloji və hüquqi istiqamətdə yol yoldaşı oluruq.
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500" className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-y-14 gap-x-14 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-[5rem]">
                                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                                        <div className="absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-lg bg-[#81689D]">
                                            <feature.icon className="h-7 w-7 text-white" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
            <div data-aos="zoom-in" data-aos-duration="1500" className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-4xl font-bold tracking-wider text-[#9290C3] sm:text-5xl lg:text-6xl">
                        Niyə NAFİMA?
                    </p>
                    <p className="mx-auto mt-5 text-lg text-gray-300">
                        Çünki biz sizi dinləyirik. Çünki sizin hekayəniz bizim üçün önəmlidir. <br /> Çünki siz tək deyilsiniz.
                    </p>
                </div>
            </div>
            <div className="bg-white/95 text-gray-900 py-16 px-6 sm:py-24 lg:px-8">
                <div className="text-center">
                    <p data-aos="zoom-in" data-aos-duration="1500" className="mt-1 text-2xl sm:text-4xl font-bold tracking-wider">
                        Əməkdaşlarımız
                    </p>
                    <p data-aos="zoom-in" data-aos-duration="1500" className="mx-auto mt-5 mb-16 text-md max-w-3xl">
                        Biz müxtəlif hüquq müdafiə təşkilatları, sosial xidmət qurumları və QHT-lərlə əməkdaşlıq edərək, sizə ən doğru və sürətli dəstəyi göstərməyə çalışırıq.
                    </p>
                    <EmployeeSlider />
                </div>
            </div>
            <InNumbers />
        </main>
    )
}

export default About