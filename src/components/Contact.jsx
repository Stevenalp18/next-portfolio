
export default function Contact(){
    return(
        <section className="h-screen w-full">
            <form className="bg-slate-300 h-80 w-96">
                <label>
                    Name:
                    <input type="text" name="name" className="w-60"/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="w-60"/>
                </label>
                <label>
                    Message:
                    <input type="textarea" name="message" className="w-60"/>
                </label>
            </form>
        </section>
    )
}