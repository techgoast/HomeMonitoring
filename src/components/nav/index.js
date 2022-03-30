import React from "react";
import {Stnav, Sth1, Headpart, Iconlist, Iconitem, Icon} from "./style";
import "../all-min/all.min.css";


const Nav = (props) => {
    const Icons = props.icons;
    const IconsList = Icons.map((icon) => {
        return (
            <Iconitem key={icon.id}><Icon active={icon.active} className={icon.class}></Icon></Iconitem>
        )
    });
    return (
        <Stnav>
            <Sth1>my <Headpart>ho</Headpart> me</Sth1>
            <Iconlist>
                {IconsList}
            </Iconlist>
        </Stnav>
    )
}

export default Nav;