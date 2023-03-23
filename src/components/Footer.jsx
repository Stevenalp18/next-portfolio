import Contact from "./Contact"

export default function Footer(){
    return(
        <footer className="bg-[url('/starry-night.jpg')] m-auto p-10 sm:p-20 bg-no-repeat bg-center bg-cover w-screen h-auto">
            <section>
                <Contact />
            </section>
            <ul className="my-10 text-white flex gap-10 justify-around font-shantell sm:gap-0 sm:p-10 sm:text-xl">
                <li className="bg-slate-500/50 py-2 px-4 sm:py-4 sm:px-6 rounded"><a href="">About</a></li>
                <li className="bg-slate-500/50 py-2 px-4 sm:py-4 sm:px-6 rounded"><a href="">Projects</a></li>
                <li className="bg-slate-500/50 py-2 px-4 sm:py-4 sm:px-6 rounded"><a href="">Contact</a></li>
            </ul>
        </footer>
    )
}
