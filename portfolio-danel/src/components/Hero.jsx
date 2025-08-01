import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

                <div>

                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/images/avatar-1.jpg" width={40} height={40} alt="Danel Torchiari portrait" className="img-cover" />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Disponible para trabajar
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Construyendo sitios web modernos y escalables para el futuro
                    </h2>

                    <div className="flex items-center gap-3">
                        <a
                            href="/CV_Danel_Torchiari.pdf"
                            download
                        >
                            <ButtonPrimary label="Descargar CV" icon="download" />
                        </a>
                    </div>


                </div>

                <div className="hidden lg:block">
                    <figure className="w-100 max-w-[350px] ml-500 bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-75% rounded-[60px] overflow-hidden">
                        <img src="/images/hero-banner.png" width={656} height={800} alt="Danel Torchiari" className="" />
                    </figure>
                </div>


            </div>

        </section>
    )
}

export default Hero