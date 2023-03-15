export default function Projects(props){
    return(
        <section className="bg-starry-sky w-screen bg-no-repeat bg-cover w-screen h-auto p-10 m-auto">
            <h2 className="text-white m-auto text-center p-10 text-3xl font-shantell">Projects Showcase</h2>
            <div className="justify-center flex flex-wrap gap-y-12 gap-x-20">
                <div className="border-2 p-8 h-auto bg-slate-200/50 rounded-2xl text-white max-w-sm">
                    <p className="text-center text-xl font-alegreya p-2">{props.projectName}</p>
                    <img className="w-80 m-auto" src={props.projectImage}/>
                    <p className="text-center p-2">{props.description}</p>
                </div>
            </div>
        </section>
    )
}