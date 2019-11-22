import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        // this.interactable = false;
    }


    render(){
        //change to a switch statement

        switch(this.props.type){
            case("base"):
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
        )
        case("room"): return(
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
                    </div>
                </div>);
        case("objects"): 
        let bttnArray = []
        this.props.objects.forEach(obj => {
            let newBtn = <button className="btn btn-primary" onClick={this.props.objClickFunct(bttnArray.length)}>{obj.object_name}</button>
            bttnArray.push(newBtn);
        });
        return(
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                {this.props.title}
            </h5>
            <p className="card-text">
                {this.props.body}
            </p>
            {bttnArray}
        </div>
    </div>)

            
        }
}
}

export default Card