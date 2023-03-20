import Navbar from "./Navbar"

export default function Header(){
    return (
        <header className="bg-[url('/lake-night.jpg')] bg-no-repeat bg-center bg-cover w-screen h-screen">
            <Navbar />
            <div className="m-auto max-w-screen-md sm:mx-auto sm:my-20">
                <p className="mx-6 my-10 text-5xl leading-relaxed font-shantell text-white lg:text-6xl lg:leading-relaxed">
                Hi, My name is Steven Perez and I like to <span className="bg-slate-100/50">create websites!</span>
                </p>
                <button className="text-white font-shantell font-medium mx-6 bg-slate-300/30 py-3 px-4 text-2xl rounded-xl lg:text-3xl">Contact</button>
            </div>
        </header>
    )
}