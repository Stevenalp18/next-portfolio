
export default function Contact(){
    return(
        <section className="bg-[url('/starry-night.jpg')] m-auto h-screen w-screen p-10">
            <form className="bg-slate-300 h-auto w-full p-6 m-auto rounded-2xl">
            <h3 className="text-center text-xl pt-2 pb-4">Contact Form</h3>
                <label>
                    Name:
                    <input type="text" name="name" className="w-full rounded-xl pb-2 mb-2"/>
                </label>
                <label className="">
                    Email:
                    <input type="email" name="email" className="w-full rounded-xl pb-2 mb-2"/>
                </label>
                <label>
                    Message:
                    <input type="textarea" name="message" className="w-full rounded-xl pb-2"/>
                </label>
                <button type="submit" className="border-solid border-2 my-10">Submit</button>
            </form>
        </section>
    )
}