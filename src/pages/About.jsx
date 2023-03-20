import Image from "next/image"
import portfolioImg from "../../public/portfolio.jpeg"

export default function About(){
    return(
        <section className="w-screen bg-no-repeat bg-center bg-cover w-screen h-auto bg-starry-sky bg-top p-12 sm:p-14">
            <h1 className="text-white text-center mx-auto mb-10 text-3xl sm:text-4xl font-shantell">Meet The Creator</h1>
            <div className="flex flex-col gap-10 sm:flex-row sm:gapx-4 mx-auto max-w-screen-lg">
                <Image 
                className="rounded-xl m-auto"
                src={portfolioImg}
                alt="portfolio"
                width={300}
                />
                <div className="" >
                    <p className="text-white font-sono text-center text-lg sm:text-left sm:text-2xl">Hi, I am Steven Perez. I am the proud owner, designer, web developer of this website and the projects below.
                     I have always loved learning to code ever since I begin learning RobotC in school, went to learn some Python, and eventually was really attracted to Javascript, 
                     it&apos;s amazing DOM manipulation and the rest of the skills that come with it. Check out the rest of my projects, I am always working on something new to improve my skillset and learn more.
                    </p>
                </div>
            </div>
        </section>
    )
}
