export default function Navbar() {

    return (
        <nav className="flex justify-between text-white p-8 sm:p-10">
            <div className='text-3xl font-shantell'>
                Steven Perez
            </div>
            <ol className="flex gap-6 hidden sm:flex font-shantell text-lg">
                <li><a href="#home-page">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#projects" >Projects</a></li>
                <li><a href="#contact" className="px-4 py-3 rounded-lg bg-slate-50/10">Contact</a></li>
            </ol>
        </nav>
    )
}
