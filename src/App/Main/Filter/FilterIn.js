import React from 'react'

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
                                        <li><a href="/" className="list-cat">Photography</a></li>
                                        <li><a href="/" className="list-cat">Website Design</a></li>
                                        <li><a href="/" className="list-cat">Branding</a></li>
                                        <li><a href="/" className="list-cat">Flyers</a></li>
                                        <li><a href="/" className="list-cat">Uncategories</a></li>
                                        <li><a href="/" className="list-cat">Category 22</a></li>
                                    </ul></li>
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
                                            <li><a href="/" className="list-cat">January 2020</a></li>
                                            <li><a href="/" className="list-cat">December 2020</a></li>
                                            <li><a href="/" className="list-cat">November 2020</a></li>
                                            <li><a href="/" className="list-cat">October 2020</a></li>
                                            <li><a href="/" className="list-cat">September 2020</a></li>
                                        </ul>
                                    </li>
    )
}

export {Categories, Archives }
