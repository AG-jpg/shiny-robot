import { MdOutlineEdit,  MdPostAdd, MdImageSearch, MdCamera} from "react-icons/md";
import './component-styles.css';


const Tools = () => {

    return <aside>
        <div class="grid-item"><MdImageSearch className="icon"/></div>
        <div class="grid-item"><MdOutlineEdit className="icon"/></div>
        <div class="grid-item"><MdPostAdd className="icon"/></div>
        <div class="grid-item"><MdCamera className="icon"/></div>
    </aside>;

}

export default Tools;
