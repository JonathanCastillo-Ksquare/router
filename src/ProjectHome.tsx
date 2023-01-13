import React from 'react'
import { useParams } from 'react-router-dom';
export const ProjectHome = () => {

    const obj = useParams();
    console.log(obj);

    return (
        <div>ProjectHome</div>
    )
}

export default ProjectHome;
