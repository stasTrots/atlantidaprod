import React, { Component } from 'react'
import axios from 'axios'

class FooterForm extends Component {
    state = {
        name:"",
        eMail:"",
        webSite:"",
        phone:"",
        message:"",
        isOrderSend:false
    }
    orderName= (e) => {
        this.setState({
            name:e.target.value,
        })
    }
    orderPhone = (e) => {
        this.setState({
            phone:e.target.value
        })
    } 
    orderEmail= (e) => {
        this.setState({
            eMail:e.target.value,
        })
    }
    orderWebsite = (e) => {
        this.setState({
            webSite:e.target.value
        })
    } 
    orderMessage = (e) => {
        this.setState({
            message:e.target.value
        })
    } 
    resetOk = () => {
        this.setState({
            isOrderSend:false
        })
    }
    onSend = (e) => {
        e.preventDefault();
        axios.post('https://my-json-server.typicode.com/kznkv-skillup/server/orders',
        {
            name:this.state.name,
            address:this.state.address,
            phone:this.state.phone,
            message:this.state.message,
            nallik:this.state.nallik,
            karta:this.state.karta,
            productsInCart:this.props.productsInCart
        })
        .then(res => res.data)
        .then(({
            name,
            address,
            phone,
            message,
            nallik,
            karta,
        }) => this.setState({
            name,
            address,
            phone,
            message,
            nallik,
            karta,
            isOrderSend:true
        }))
    }
    renderForm = () => {
        return (
            <form  className="form-cont" onSubmit={this.onSend}>
                <input type="text"  
                placeholder="Name*" 
                value={this.state.name}
                onChange={this.orderName}/>

                <input type="text"  
                placeholder="E-mail*"
                value={this.state.eMail}
                onChange={this.orderEmail} />

                <input type="text"  
                placeholder="Telephone*" 
                value={this.state.phone}
                onChange={this.orderPhone}/>

                <input type="text"  
                placeholder="Website" 
                value={this.state.webSite}
                onChange={this.orderWebsite}/>

                <textarea  
                placeholder="Message*"
                value={this.state.message}
                onChange={this.orderMessage}></textarea>

                <button type="submit">Submit</button>
            </form>
        )
    }

    renderMessage = () => {
        return (
            <form className="after-form">
                <p>Dear {this.state.name}, thanks for you Message!</p>
                <button type="submit" onClick={this.resetOk}>Ok</button>
            </form>
        )
    }

    render() {
        return(
            <>
                
                {this.state.isOrderSend !== true ? this.renderForm() :
                this.renderMessage()}
            </>
        )
    }
    
}

export default FooterForm