import { Link } from "react-router";
import img1 from '../../assets/img/zorakiliqnedir.png';

function WhatIsAbuse() {
    return (
        <main className="bg-[#F5EFE7] min-h-[50vh]">
            <div className="py-[3rem] gradient1">
                <div className="container text-white md:text-start text-center">
                    <Link className="hover:underline" to={'/'}>Ana səhifə </Link>{' > '}
                    <Link className="hover:underline" to={'/whatIsAbuse'}> Zorakılıq nədir?</Link>
                </div>
            </div>
            <div className="container">
                <h1 className="text-6xl pb-8 text-center md:text-start"><b className="text-[#a93d92]">Ailə Zorakılığı</b> nədir?</h1>
                <div className="flex justify-between flex-col-reverse md:flex-row">
                    <div>
                        <p className="leading-8 pb-5"><b>Ailə zorakılığı</b> — bu, sadəcə fiziki ağrı deyil. Bu, bir insanın başqa bir insan üzərində güc nümayiş etdirməsi, onu qorxutması, idarə etməyə çalışması, səssizliyə məcbur etməsidir. Bəzən sözlə, bəzən baxışla, bəzən isə sadəcə susmaqla belə törədilir...
                            Ən ağrılısı odur ki, bu zorakılıq çox zaman evdə, insanın ən güvəndiyi yerdə baş verir. <br /> Zorakılığı yaşayanların əksəriyyəti qadınlardır – və çox vaxt onların hekayələri eşidilmir...
                            <br /> NAFİMA olaraq biz inanırıq ki, hər kəsin səsi eşidilməlidir. Biz susmuruq. Biz işıq tuturuq. Biz dəyişirik.</p>
                        <p className="font-bold py-5 text-md">Ailə zorakılığı tək bir formaya sığmır. <br /> Onun ifadə oluna biləcəyi hallar bunlarla məhdud olmasa da, aşağıdakılar ən geniş rast gəlinən nümunələrdir:</p>
                        <ul className="list-disc px-10">
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Məcburedici nəzarət</b> – qorxutma, alçaltma, təcrid və nəzarət etmə kimi ardıcıl davranış nümunələri, bəzən fiziki və ya seksual zorakılıqla və ya bu zorakılıqla hədələməklə müşayiət olunur</li>
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Psixoloji və/və ya emosional zorakılıq</b> – daim tənqid, manipulyasiya, günahkar hiss etdirmə və alçaltma</li>
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Fiziki və ya seksual zorakılıq</b> – bədənə qarşı tətbiq olunan güc və ya razılıq olmadan cinsi təmas</li>
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Maliyyə və ya iqtisadi zorakılıq</b> – maddi imkanların məhdudlaşdırılması, gəlirin gizlədilməsi və maliyyə üzərində tam nəzarət</li>
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Təqib və narahat etmə</b> – ardıcıl şəkildə izləmək, təhdid etmək və şəxsi sərhədləri pozmaq</li>
                            <li className="my-4"><b className="text-[#81689D] text-lg italic">Onlayn və ya rəqəmsal zorakılıq</b> – mesajlar, sosial media, e-poçt və digər onlayn vasitələrlə təqib, təhdid və nəzarət</li>
                        </ul>
                    </div>
                    <img src={img1} alt="img" className="md:w-[300px] w-[200px] m-auto mb-5 object-contain" />
                </div>
            </div>
            <div className="gradient2 text- font-bold py-[5rem] text-xl tracking-wider">
                <p className="container text-center underline">Unutma: Hər bir insan, fərq etməz kimdir, sevgi, hörmət və anlayış üzərində qurulmuş münasibətə layiqdir!</p>
            </div>
        </main>
    )
}

export default WhatIsAbuse