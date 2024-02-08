import FooterComponent from "../components/Footer";
import NavBar from "../components/NavBar";
import ListPosts from "../components/ListPosts";
//import MeuEditor from "../components/InputText";
const Blog=()=>{
    return(
        <div>
            <NavBar />
           
            <ListPosts />
            <FooterComponent />
        </div>
    )
};
export default Blog;