import React, { Component } from 'react';
import Modal from 'react-modal';
import userIcon from './img/user.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false,
        name: '',
        password: '',
        sign:'Sign In',
        isDisabled: false
       
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    
};
  
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  submitModal = () => {
    if (!this.state.name.includes('@mcmaster.ca') ){
      alert("This is not a Valid McMaster Account!");
    }
    else{
      this.setState({ modalIsOpen: false });
      this.setState({ sign: this.state.name });
      localStorage.setItem('email',
                JSON.stringify(this.state.name));
      this.setState({ isDisabled: true });
    }
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange(e) {
    this.setState({ name: e.target.value });
    
}

  handleChange2(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
       
        <input type='text' onClick={this.openModal} value={this.state.sign} disabled={this.state.isDisabled}
        style={{marginBottom:'0px',marginTop:'0px',fontSize:'16px',marginLeft:'6px',color:'rgb(69, 131, 212)',fontWeight:'bold', border:'none'}}
        />

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <div className='Subbox'>
            <img className='icon' src={userIcon} alt='User' />
            <label className='Blabel' htmlFor='name' style={{ padding: '10px', fontSize: '18px' }}>Mac ID:</label>
            <input type="text" id="nameBox" onChange={this.handleChange} style={{ fontSize: '16px' }} />
          </div>
          <div className='Subbox'>
            <label className='Blabel' htmlFor='email' style={{ padding: '10px', fontSize: '18px' }}>Passwpord:</label>
            <input type="password" id="pswBox" onChange={this.handleChange2} style={{ fontSize: '16px' }} />
          </div>
          <button id='CloseBtn'onClick={this.closeModal} style={{borderRadius: '12px'}}>Close</button>
          <button id='SubmitBtn'onClick={this.submitModal} style={{borderRadius: '12px'}}>Submit</button>
        </Modal>

      </div>
    );
  }
}
export default Login;