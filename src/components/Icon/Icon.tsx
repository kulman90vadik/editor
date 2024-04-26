// import React from "react";
import sprite from "./sprite.svg";

type Props = {
    id: string
}

export const Icon = ({id}: Props) => {
    return ( 
        <svg >
            <use href={sprite + "#" + id}></use>
        </svg>
    );
}
