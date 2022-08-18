import React, { useState } from 'react';
import ListElement from "./listElement/ListElement";
import Styles from "../../styles/App.module.css";
import SearchIcon from './searchIcon/SearchIcon';
import { Box, TextField, Button } from '@mui/material';



const SearchBox = (props) => {
    const {selectPosition, setSelectPosition} = props;
    const [query, setQuery] = useState("");
    const baseUrl = "https://nominatim.openstreetmap.org/search?";
    const [listPlace, setListPlace] = useState([]);
    const [visibleList, setVisibleList] = useState(false);

    const searchElement = (element) => {
        setQuery(element);
    }

    const getSearch = () => {
        const params = {
            q: query,
            format: 'json',
            addressdetails: 1,
            polygon_geojson: 0
        }

        const queryString = new URLSearchParams(params).toString();
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        }
        fetch(`${baseUrl}${queryString}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setListPlace(JSON.parse(result))
        })

        setVisibleList(false);
    }

    return(
        <Box className={Styles.searchBoxBloc}>
            <TextField  className={Styles.searchBoxBloc_inputText} sx={{ bgcolor: '#fafafa' }} type="search" id="standard-basic" label="Search in Maps" variant="standard" value={query} onChange={(e) => searchElement(e.target.value)}/>
            <Button variant="text" onClick={getSearch}><SearchIcon /></Button>

            <ListElement listPlace={listPlace} visibleList={visibleList} setSelectPosition={setSelectPosition} setVisibleList={() =>     setVisibleList(!visibleList)} />
        </Box>
    )
}

export default SearchBox;