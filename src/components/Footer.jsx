import Contact from "./Contact"

export default function Footer(){
    return(
        <footer className="w-full bg-gray-800">
            <section className="flex justify-between p-10 flex-wrap">
            <div className="w-full flex justify-center gap-4">
                <div className="w-8">
                    <a 
                    href="https://twitter.com/Stevenalp18" 
                    target="_blank">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" 
                        alt="twitter icon"/>
                    </a>
                </div>
                <div className="w-8">
                <a 
                href="https://www.linkedin.com/in/stevenalp18/" 
                target="_blank">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
                        alt="linkedin icon"
                    />
                    </a>
                </div>
                <div className="w-8">
                <a 
                href="https://github.com/Stevenalp18" 
                target="_blank">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" 
                        alt="github icon"/>
                    </a>
                </div>
            </div>
            <div className="mt-4 text-center w-full">
                <p className="text-white text-sm">© 2023 Steven Perez. All rights reserved</p>
            </div>
            </section>
        </footer>
    )
}
