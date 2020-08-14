import React, {Component} from "react";
import firebase from "./firebase";

// Modal referenced from https://sabe.io/tutorials/how-to-create-modal-popup-box but changed to work with react


const modal = document.querySelector(".modal");

const closeButton = document.querySelector(".close-button");

class Modal extends Component {

    toggleModal = () => {
        const modal = document.querySelector(".modal");
        modal.classList.toggle("show-modal");
    } 

    render(){
        console.log(this.props.id, "this is my props.id")
        return (
            <div className="modal" >
                <div className="modal-content">
                    <span className="close-button" onClick={this.toggleModal}>X</span>
                    <h2>{this.props.answerDisplay}</h2>
                    {/* {
                        this.props.answerBool
                        ?
                        :<p></p>
                    } */}
                   
                </div>
            </div>
        )
    }
    
    
}
    

export default Modal