import React from 'react';
import ReactModal from 'react-modal';
import CModalClass from './style/CurrentModal.less';
import Button from 'react-bootstrap/lib/Button';
export default class ClickplusModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal :false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.init = this.init.bind(this);
  }

  handleOpenModal(){
    this.setState({showModal : true});
  }

  handleCloseModal(){
    this.setState({showModal:false});
  }

  init(){
    console.log("打开modal后的初始化，方法进行中,这里可以给后端发送请求。。。");
  }

  render(){
    return (
        <div>
          <Button onClick={this.handleOpenModal} bsStyle="primary" bsSize="small">查看更多</Button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="this is modal example"
            onAfterOpen = {this.init}
            style={{
              overlay:{
                
              },
              content:{
                width:"600px",
                height:"310px",
                margin:"auto",
                marginTop:"100px",
                backgroundColor:"#EEF1F7",
                padding:"0"
              }
            }}
          >
          <div className={CModalClass.c_modal_title}>模态框名字</div>
          <div className={CModalClass.c_modal_content}>
            <p>{this.props.param}</p>
            <p>HAHA ,I see YOU</p>
          </div>
          <div className={CModalClass.c_modal_footer}>
            <Button bsStyle="danger" bsSize="small" onClick={this.handleCloseModal}>关闭</Button>
          </div>
          </ReactModal>
        </div>
      )
  }
}