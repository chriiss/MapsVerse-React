import React, { useState } from "react";
import Maps from "./maps/Maps";
import SearchBox from "./searchBox/SearchBox";


const Home = () => {
    const [selectPosition, setSelectPosition] = useState(null);
    return(
        <div>
            <div>
                <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
            </div>
            <div>
                <Maps selectPosition={selectPosition} />
            </div>
        </div>
    )
}

export default Home;