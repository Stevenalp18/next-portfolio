
export default function Contact(){
    return(
        <section className="bg-[url('/starry-night.jpg')] m-auto p-10 bg-no-repeat bg-center bg-cover w-screen h-auto">
            <h2 className="text-white text-4xl text-center pb-10 font-semi-bold hidden sm:block font-shantell" id="contact">Contact Us</h2>
            <div className="bg-slate-500/20 sm:flex text-white bg-opacity-30 border-2 border-slate-500/20 rounded-2xl sm:p-1 p-4 max-w-3xl m-auto gap-2">
                <div className="sm:w-1/3 sm:block bg-blue-300/50 rounded-2xl p-2 hidden">
                    <div className="text-left w-full px-2">
                        <p className="text-2xl pt-2 font-bold font-alegreya">Contact Information</p>
                        <p className="text-md pt-2 font-light font-alegreya">Fill out the form to get in touch!</p>
                        <div className="flex h-full gap-4 md:gap-10 top-40 justify-center relative">
                            <div className="sm:w-10">
                                <a 
                                href="https://twitter.com/Stevenalp18" 
                                target="_blank">
                                <img 
                                src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" 
                                alt="twitter icon"/>
                                </a>
                                </div>
                            <div className="sm:w-10">
                            <a 
                            href="https://www.linkedin.com/in/stevenalp18/" 
                            target="_blank">
                                <img 
                                src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
                                alt="linkedin icon"
                                />
                                </a>
                            </div>
                            <div className="sm:w-10">
                            <a 
                            href="https://github.com/Stevenalp18" 
                            target="_blank">
                                <img 
                                src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" 
                                alt="github icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left p-2 sm:hidden">
                    <h2 className="text-2xl font-bold pb-2 font-shantell">Contact Us</h2>
                    <p className="text-sm font-alegreya">Get in touch, fill the form below</p>
                </div>
                <div className="sm:w-2/3 p-2">
                    <form 
                    className="w-full"
                    action="https://formsubmit.co/2d77e14ba6424397a3dad5a6bdc8c19a" 
                    method="POST" >
                        <label 
                        name="name"
                        className="w-full text-left text-sm font-alegreya" >
                            Name
                            <input 
                            type="text" 
                            className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80 font-alegreya"/>
                        </label>
                        <label 
                        className="w-full text-left text-sm font-alegreya">
                            E-Mail
                            <input 
                            type="email" 
                            name="email" 
                            className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80 font-alegreya"/>
                        </label>
                        <label 
                        className="w-full text-left text-sm font-alegreya">
                            Phone #
                            <input 
                            type="text"
                            name="phone" 
                            className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80 font-alegreya"/>
                        </label>
                        <label 
                        className="w-full text-left text-sm font-alegreya">
                        Message
                        <textarea 
                        type="textarea" 
                        rows={4} name="message" 
                        className="w-full rounded-md py-1 px-2 text-black bg-gray-100/80 font-alegreya"></textarea>
                    </label>
                    <div className="flex align-center">
                    <button type="submit" className="bg-slate-500/80 p-2 rounded-3xl mt-4 w-6/12 mx-auto font-bold text-lg font-shantell">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

