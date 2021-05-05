import React, { useState } from 'react'

const Komments = () => {
    const arrKomments = [
        {   
            id:1,
            name:"Stas Trotsenko",
            eMail:"stas9n82@gmail.com",
            date:"13 April 2021 at 17.31",
            message:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
        }
    ]
    const [komments,setKomments] = useState(arrKomments)
    const [newKomments,setNewKomments] = useState({
        name:"",
        eMail:"",
        message:"",
        
    })
    const handleNameChange = (e) => (
        setNewKomments(value => ({
            ...value,
            name:e.target.value
        }))
    )
    const handleEmailChange = (e) => (
        setNewKomments(value => ({
            ...value,
            eMail:e.target.value
        }))
    )
    const handleMessChange = (e) => (
        setNewKomments(value => ({
            ...value,
            message:e.target.value
        }))
    )
    const onSend = (e) => {
        e.preventDefault();
        setNewKomments({
            name:"",
            eMail:"",
            message:"",
             
        })
        setKomments(value => {
            return [...value,newKomments]
        })
    }
        return (
            <>
            <div className="comments">
                    <div className="com-title">
                        <h2>comments (2)</h2>
                    </div>
                    <div className="comm-list">
                        {
                            komments.map((item) => (
                                <div className="comm-item" key={item.name}>
                                    <div className="comm-img">
                                        <img src="/image/komments.png" alt=""/>
                                    </div>
                                    <div className="comm-about">
                                        <div className="comm-name">
                                            <h3>{item.name}</h3>
                                            <i>{new Date().toLocaleDateString()}</i>
                                        </div>
                                        <div className="comm-inf">
                                            <p>{item.message}</p>
                                        </div>
                                        <div className="reply">
                                            <img src="/image/reply.png" alt=""/>
                                            <i>Reply</i>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                        
                    </div>
                </div>
                <div className="leave-comm">
                    <div className="com-title">
                        <h2>leave a comment</h2>
                    </div>
                    <form className="form-comm" onSubmit={onSend}>
                        <input type="text"  placeholder="Name*"
                        value={newKomments.name}
                        onChange={handleNameChange}
                        />
                        <input type="text"  placeholder="E-mail*"
                        value={newKomments.eMail}
                        onChange={handleEmailChange}
                        />
                        <textarea  placeholder="Message*"
                        value={newKomments.message}
                        onChange={handleMessChange}
                        ></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            
            </>
        )
    
}

export default Komments