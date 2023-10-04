import "../styles/form.css"
import Footer from "./Footer";
const Form=()=>{
    return(

        <div  > 
        <div className="text">
        <h1>Reach Me</h1>
        Ask a question, hire me? This contact form is here for that
        </div>
        <div id="form">
        <form action="">
            <p>
            <input type="text" name="name" id="name" placeholder="Name"color="black" /></p>
            <p>
            <input type="email" name="" id="email" placeholder="email "color="black"/></p>
            <p>
            <input type="text" name="subject" id="object" placeholder="subject" color="black"/></p>
            <p>
            <input type="text" name="message" id="message" placeholder="message"color="black" /></p>
            <input type="submit" name="" id="enviar" value="Send" />
            </form>
        </div>
        <Footer /> 
        </div>
    );
}; export default Form;