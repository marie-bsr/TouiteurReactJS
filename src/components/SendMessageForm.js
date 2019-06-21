import React from 'react';
import{httpPostMessage} from '../api/TouitAPI';

class SendMessageForm extends React.Component {


    constructor(props){  
        super(props);
        this.state= { 
            name: '',
            message: ''
        }
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangemessage = this.handleChangemessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangename(event) {
        this.setState({name: event.target.value});
      }

      handleChangemessage(event) {
        this.setState({message: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Le message ' +  this.state.message + ' a été envoyé ');
        event.preventDefault();
        httpPostMessage(this.state.name, this.state.message, (data) =>{console.log(data)})
        this.setState ({name: '',message: ''});
      }


      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
             
              <input className="nom" type="text" value={this.state.name} placeholder="Votre Nom" onChange={this.handleChangename} />
              
              <input className="message" type="text" value={this.state.message} placeholder="Votre Message" onChange={this.handleChangemessage} />
            </label>
            <input className="envoi" type="submit" value="Envoyer" className="envoi"/>
          </form>
        );
      }

}

//








export default SendMessageForm;