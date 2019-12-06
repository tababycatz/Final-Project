import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
        // this.interactable = false;
    }


    render(){
        //change to a switch statement
    let bttnArray = []
    let backBtn = <button className="btn btn-primary" onClick={this.props.click2}>Go Back</button>  
    bttnArray.push(backBtn)   
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
        case("room"): 
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
                        </div>
                    </div>);

        case("objects"): 
             bttnArray = []
            this.props.objects.forEach((obj, index) => {
                let newBtn = <button key={index} className="btn btn-primary" onClick={(e) => this.props.click1(index,e)}>{obj.object_name}</button>
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

        case("players"): 
            bttnArray = []
            this.props.players.forEach((char, index) => {
                let newBtn = <button key={index} className="btn btn-primary" onClick={(e) => this.props.click1(this.props.players[index].character_id,e)}>{char.char_name}</button>
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
            </div>);

        case("player"):
            bttnArray = []
            bttnArray.push(backBtn)   

            return(
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.title}
                    </h5>
                    <p className="card-text">
                        <ul>
                            <li>Age: {this.props.char.age}</li>
                            <li>Weight: {this.props.char.weight}</li>
                            <li>Skills: {this.props.char.skills}</li>
                            <li>Breed: {this.props.char.breed}</li>
                        </ul>
                    </p>
                    {bttnArray}
                </div>
            </div>)

        case("object"):
            bttnArray = []
            if(this.props.unOwned){
                let pickUpBtn = <button className="btn btn-primary" onClick={(e) => this.props.click1(this.props.object)}>Pick up</button>
                bttnArray.push(pickUpBtn)
            }  
            bttnArray.push(backBtn)            
                return(<div className="card">
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

            case("error"):
            bttnArray.push(backBtn)            
            return(<div className="card">
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