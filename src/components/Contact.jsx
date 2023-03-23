
export default function Contact(){
    return(
        <div>
            <form className="bg-slate-300/50  h-auto w-full p-6 m-auto rounded-2xl max-w-lg">
            <h3 className="text-center text-2xl pt-2 pb-4 font-shantell">Contact Form</h3>
                <label>
                    Name:
                    <input type="text" name="name" className="w-full rounded py-1 px-2 mb-2"/>
                </label>
                <label className="">
                    Email:
                    <input type="email" name="email" className="w-full rounded py-1 px-2 mb-2"/>
                </label>
                <label>
                    Message:
                    <textarea type="textarea" rows={4} name="message" className="w-full rounded py-1 px-2"></textarea>
                </label>
                <button type="submit" className="bg-gray-300 p-2 rounded my-10 font-shantell">Submit</button>
            </form>
        </div>
    )
}