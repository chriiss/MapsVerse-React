import React from 'react';
import Marker from "../../../assets/marker.png";
import Styles from "../../../styles/App.module.css";
import { List, ListItem, Divider } from '@mui/material';


const ListElement = (props) => {
    const {listPlace, visibleList, setSelectPosition, setVisibleList } = props;
    return(
        <>
            {listPlace.map((item) => {
                return(!visibleList &&
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={item.place_id}>
                        <ListItem className={Styles.listItem} alignItems="flex-start" role="button" onClick={() => {
                            setSelectPosition(item)
                            setVisibleList(!props.visibleList);
                        }}>
                            <img src={Marker} className={Styles.markerSize} alt="marker"/>{item?.display_name}
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                )
            })}
        </>
    )
}

export default ListElement;