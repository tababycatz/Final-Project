import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        // this.interactable = false;
    }


    render(){
        if(!this.props.interactable){
            return(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.title}
                        </h5>
                        <p className="card-text">
                            {this.props.body}
                        </p>
                    </div>
                </div>
        )} else {
            return(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.title}
                        </h5>
                        <p className="card-text">
                            {this.props.body}
                        </p>
                        <button className="btn btn-primary" onClick={this.props.click1}>
                            {this.props.click1Text}
                        </button>
                        <button className="btn btn-primary" onClick={this.props.click2}>
                            {this.props.click2Text}
                        </button>
                    </div>
                </div>
            )
        }
}
}

export default Card