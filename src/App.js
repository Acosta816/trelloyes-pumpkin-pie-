import React from 'react';
import List from './List';



//to access the STORE, use this.props.storeProp
//this.props.storeProp.lists (array of List Objects)
//this.props.storeProp.allCards (an Object with letterKeys:{individual Card values})
//map over storeProp.lists and render a list that gets a cardsProp passed into each one that is created special to that list's cardId[a,r,r,a,y]
class App extends React.Component {

  renderCardsProp(cardIdsArray) {
      // console.log(cardIdsArray);
    const myCardObjects= cardIdsArray.map(cardId=> {
      return(
        this.props.storeProp.allCards[cardId]
      )
    })
    console.log(myCardObjects)
    return myCardObjects;
  }

  renderList() {
    const myList =this.props.storeProp.lists.map((list,index)=>{
              
      return(
        <List idProp={list.id} key={index} headerProp={list.header} cardsProp={this.renderCardsProp(list.cardIds)} />
      )
      
    })
    return myList;
  }

  render(){
    console.log(this.props.storeProp);

    return (

      <main>
        <h1>TrelloPumpkinPie!!!</h1>
        <div>
          {this.renderList()}
        </div>
      </main>
    )
  }
}


export default App;