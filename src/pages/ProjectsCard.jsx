
export default function ProjectsCard(props) {
    return (
        <div className="max-w-sm">
                <div className="border-2 p-4 h-auto bg-slate-200/30 rounded-2xl text-white">
                    <p className="text-center text-3xl font-alegreya p-2">{props.projectName}</p>
                    <img className="w-80 m-auto rounded-xl mb-6 mt-4" src={props.projectImage}/>
                    <p className="text-center p-2 font-sono text-xl">{props.description}</p>
                </div>
        </div>
    )
}