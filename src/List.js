import React from 'react';
import Card from './Card';



//accepts 2 props from the App: header(header of the individual List) and cards(array of individual card objects)

class List extends React.Component {

    renderCards() {
        
        const myCards= this.props.cardsProp.map(card=> {
             return(
                 <Card key={card.id} titleProp={card.title} contentProp={card.content} />
             )
         })
     return myCards;
 }

    render(){
 
     return(
         <section className="List">
             <header>
                 { this.props.idProp + this.props.headerProp}
             </header>
             <div className="List-cards">
                 {this.renderCards()}
             </div>
         </section>
     )
 }
    }


export default List;