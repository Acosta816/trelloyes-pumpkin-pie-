import React from 'react';


//this.props.sectionsProp is array of section objects. each object had title key and content key

class Accordian extends React.Component {

    state = {
        currentContent: this.props.sectionsProp[0].content
    }

    changeState = (e)=> {
        console.log(e.target.value);

        this.setState({
            currentContent: e.target.value,
        })
    }

    render(){

        return(
            <ul>
                {
                    this.props.sectionsProp.map((sec, index)=> {
                        return (
                            <li key={index}>
                                <button onClick={this.changeState} value={sec.content} key={index}>{sec.title}</button>
                                <p>{this.state.currentContent === sec.content? sec.content: null}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}


export default Accordian;