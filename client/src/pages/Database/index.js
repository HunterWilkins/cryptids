import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/api";
import CreateModal from "../../components/CreateModal";
import "./style.css";

function Database() {

    const [cryptids, setCryptids] = useState([{}]);
    const [image, setImage] = useState("");
    const [pageMax, setPageMax] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        API.getDatabase().then(({data}) => {
            // console.log(data);
            setCryptids(data);
        });
    }, []);

    return(
        <div id = "database">
            <CreateModal />
            <section id = "list">
                <figure className = "db-cryptid">
                    <p>Name</p>
                    <p>Body Type</p>
                    <p>Gender</p>
                    <p>Magic Type</p>
                </figure>
                <hr />
                <div id = "results">

                {
                    cryptids.length > 0 ? 
                    cryptids.map(item => {
                        return(
                            <Link key = {item.id} to = {"/cryptid/" + item.id} onMouseEnter = {() => {setImage(item.img)}} className = "db-cryptid">
                                <p>{item.name}</p>
                                <p>{item.bodyType}</p>
                                <p>{item.gender}</p>
                                <p>{item.magicType}</p>
                            </Link>
                        )
                    })
                    :
                    "There are no cryptids"
                }
                </div>

                <span id = "pages">
                    <img src = "/assets/images/forward-arrow.png" />
                    <p>{page} / {pageMax}</p>
                    <img src = "/assets/images/forward-arrow.png" />
                </span>
            </section>
            <section id = "cryptid-img">
                <span id = "tools">
                    <img id = "pencil" src = "/assets/images/pencil.png" />
                </span>
                <figure>
                {
                    image !== "" ?
                    <img src = {"/assets/images/" + image}/>
                    :
                    "(Hover over a cryptid to see their portrait!)"
                }
                </figure>
            </section>
        </div>
    )
}

export default Database;