import React from 'react'
import posts, { getPostMore } from '../../App/Main/PostFolder/Posts/Post'
import { Link } from 'react-router-dom'
import Komments from '../Komments/Komments'
import { connect } from 'react-redux'

const PostPagesItem = ({
    match,
    postItem = getPostMore(posts),
    isLiked ,
    addLike,
}) => {
    const id = match.params.id
    return(
        <div className="post">
                        
                        <div className="post-img">
                            <img src={postItem[id].images} alt=""/>
                        </div>
                        <div className="post-name">
                            <h3>{postItem[id].title}</h3>
                            <i>By {postItem[id].author} /{postItem[id].data} </i>
                        </div>
                        <div className="post-set">
                            <div className="comm">
                                <img src="/image/kom.png" alt="" className="post-set-img"/>
                                <p className="post-set-text">{postItem[id].komments}</p>
                            </div>
                            <div className="search">
                                <img src="/image/search.png" alt="" className="post-set-img"/>
                                <p className="post-set-text">{postItem[id].search}</p>
                            </div>
                            <div className="categ">
                                <img src="/image/categ.png" alt="" className="post-set-img"/>
                                <Link to={`/categor/${postItem[id].categor}`} className="post-set-text item-set-text-categor">{postItem[id].categor}</Link>
                            </div>
                            <div className="like-item">
                                <button  className="isLiked">
                                {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                                </button>
                            </div>
                        </div>
                        <div className="post-text">
                            <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, at efficitur tellus ante a nisl. Pellentesque eu imperdiet lacus, quis gravida libero. Vivamus ac est mauris. Sed orci velit, iaculis quis elementum sit amet, lacinia vitae purus. Nam magna nulla, ultrices nec faucibus in, venenatis imperdiet nisi. Aliquam interdum lectus tempus nunc luctus condimentum a vel magna.</p>
                                
                            <p>Aliquam nibh diam, elementum in lorem eu, dictum pretium leo. Nullam condimentum ante at sapien consectetur fringilla. Fusce ut ultricies tortor, eu sagittis elit. Pellentesque pretium, arcu ut consectetur posuere, nulla purus porttitor eros, vel eleifend mi ligula vel ligula. Aenean eget malesuada erat, ut ultricies orci. Sed sed tortor ut lorem semper feugiat vel vel magna. Aliquam fermentum, nunc nec cursus lobortis, odio odio elementum augue, eget rhoncus magna elit ut lorem. Quisque ac quam non purus venenatis lacinia. Donec sit amet posuere ante, pulvinar interdum nibh.</p>
                            <div className="post-text-itali">
                                <p>{postItem[id].textInf}</p>
                            </div>
                            <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, at efficitur tellus ante a nisl. Pellentesque eu imperdiet lacus, quis gravida libero. Vivamus ac est mauris. Sed orci velit, iaculis quis elementum sit amet, lacinia vitae purus. Nam magna nulla, ultrices nec faucibus in, venenatis imperdiet nisi. Aliquam interdum lectus tempus nunc luctus condimentum a vel magna.</p>
                                
                            <p>Aliquam nibh diam, elementum in lorem eu, dictum pretium leo. Nullam condimentum ante at sapien consectetur fringilla. Fusce ut ultricies tortor, eu sagittis elit. Pellentesque pretium, arcu ut consectetur posuere, nulla purus porttitor eros, vel eleifend mi ligula vel ligula. Aenean eget malesuada erat, ut ultricies orci. Sed sed tortor ut lorem semper feugiat vel vel magna. Aliquam fermentum, nunc nec cursus lobortis, odio odio elementum augue, eget rhoncus magna elit ut lorem. Quisque ac quam non purus venenatis lacinia. Donec sit amet posuere ante, pulvinar interdum nibh.</p>
                        </div>
                        <div className="post-meregi">
                            <img src="/image/mereg-post-1.png" alt=""/>
                            <img src="/image/mereg-post2.png" alt=""/>
                            <img src="/image/mereg-post3.png" alt=""/>
                            <img src="/image/mereg-post4.png" alt=""/>
                            <img src="/image/mereg-post5.png" alt=""/>
                        </div>
                        
                        
                
                <Komments/>
            </div>
    )
}

    

const mapState = (state,props) => ({
    isLiked:state.productsLike[props.match.params.id]
})

export default connect(
    mapState,
)(PostPagesItem)