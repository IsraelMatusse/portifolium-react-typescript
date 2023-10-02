import "../styles/form.css"
const Contact=()=>{
    return(

        <div id="form" > 
            <form action="">
            <p><label htmlFor="name">Name</label>
            <input type="text" name="name" id="" /></p>
            <p><label htmlFor="email">Email</label>
            <input type="email" name="" id="" /></p>
            <p><label htmlFor="object">Object</label>
            <input type="text" name="object" id="" /></p>
            <p><label htmlFor="message">Message</label>
            <input type="text" name="" id="" /></p>
            <input type="submit" name="" id="" value="Enviar" />
            </form>
        </div>
    );
}; export default Contact;
