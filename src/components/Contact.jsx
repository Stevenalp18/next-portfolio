
export default function Contact(){
    return(
        <div className="bg-slate-500/20 h-auto sm:flex text-white bg-opacity-30 border-2 border-slate-500/20 rounded-2xl sm:p-1 p-4 max-w-3xl m-auto gap-2">
            <div className="sm:w-1/3 sm:block bg-blue-300/50 rounded-2xl p-2 hidden">
                <div className="text-left w-full px-2">
                    <p className="text-xl pt-2 font-bold">Contact Information</p>
                    <p className="text-md pt-2 font-light">Fill out the form to get in touch!</p>
                </div>
            </div>
            <div className="text-left p-2 sm:hidden">
                <h2 className="text-2xl font-bold pb-2">Contact Us</h2>
                <p className="text-sm">Get in touch, fill the form below</p>
            </div>
            <div className="sm:w-2/3 p-2">
                <form 
                className="w-full"
                target="_blank"
                action="https://formsubmit.co/2d77e14ba6424397a3dad5a6bdc8c19a" 
                method="POST" >
                    <label 
                    name="name"
                    className="w-full text-left text-sm" >
                        Name
                        <input 
                        type="text" 
                        className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80"/>
                    </label>
                    <label 
                    className="w-full text-left text-sm">
                        E-Mail
                        <input 
                        type="email" 
                        name="email" 
                        className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80"/>
                    </label>
                    <label 
                    className="w-full text-left text-sm">
                        Phone #
                        <input 
                        type="text"
                        name="phone" 
                        className="py-1 px-2 text-black w-full rounded-md mb-2 bg-gray-100/80"/>
                    </label>
                    <label 
                    className="w-full text-left text-sm">
                    Message
                    <textarea 
                    type="textarea" 
                    rows={4} name="message" 
                    className="w-full rounded-md py-1 px-2 text-black bg-gray-100/80"></textarea>
                </label>
                <div className="flex align-center">
                <button type="submit" className="bg-slate-500/80 p-2 rounded-3xl mt-4 w-6/12 mx-auto font-bold text-lg">Submit</button>
                </div>
                </form>
            </div>
        </div>
    )
}