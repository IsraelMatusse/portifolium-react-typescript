import FooterComponent from "../components/Footer";
import NavBar from "../components/NavBar";
import ListPosts from "../components/ListPosts";
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