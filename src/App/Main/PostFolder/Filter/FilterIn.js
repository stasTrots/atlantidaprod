import React from 'react'
import {categories, archivesObj} from './FilterObj'
import { Link } from 'react-router-dom'


const Categories = ({
    openCategories,
    categorOpen
}) => {
    let filCategor = "ctg-ctg"
    if(categorOpen) {
        filCategor = "ctg-ctg ctg-ctg-active"
    }
    return (
            <li className={filCategor} onClick={openCategories}>categories +
                <ul className="categories">
                {
                    categories.map(({
                        idCateg,
                        categorName    
                    }) => (
                            
                            <li key={idCateg}><Link to={`/categor/${categorName}`} className="list-cat">{categorName}</Link></li>
                        ))
                }
                </ul>
            </li>
    )
}

const Archives = ({
    archOpen,
    openArch
}) => {
    let filArch = "ctg-rch"
    if(archOpen) {
        filArch = "ctg-rch ctg-rch-active"
    }
    return (
        <li className={filArch} onClick={openArch}>acrchives +
            <ul className="archives" >
                {
                    archivesObj.map(({
                        idArch,
                        archName
                    }) => (
                        <li key={idArch}><Link to={`/categor/${archName}`} className="list-cat">{archName}</Link></li>
                    ))
                }
            </ul>
        </li>
    )
}

export {Categories, Archives }
