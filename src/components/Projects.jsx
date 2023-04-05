export default function Projects(props){
    return(
        <section className="bg-[url('/starry-night.jpg')] w-screen bg-no-repeat bg-cover w-screen h-auto p-10 m-auto">
            <h2 className="text-white m-auto text-center p-10 text-3xl font-shantell" id="projects">Projects Showcase</h2>
            <div className="flex flex-wrap gap-y-12 gap-x-20 mb-10 justify-center w-max-sm">{props.projectsCard}</div>
        </section>
    )
}