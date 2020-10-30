import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component
{
     /*
        The super keyword refers to the parent class.
        It is used to call the constructor of the parent class and to access the parent's properties and methods.
        */
       /*
       state is a javascript object 
       state => Each component can store its own local information in its "state"
         - private and fully controlled by the component 
         - can be passed as props to children
         - only class component can have local state 

       */
      /*
      props => JSX attributes are passed into a component as a single object
      */
    constructor(props)
    {
        super(props);
       
        console.log('Menu Component Constructor is invoked');
    }
    componentDidMount()
    {
        console.log('Menu Component ComponentDidMount is invoked');
    }
    // when need to change state must use setState js object
    
    renderDish(dish)
    {
        if(dish != null)
        {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
    render()
    {
        // iterate over all the items in my dishes array using map 
        const menu = this.props.dishes.map( (dish) => {
            return (

                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={ () => this.props.onClick(dish.id) }>
                        
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
            
                        </CardImgOverlay>
                    </Card>
                </div>
            ); 
            
        });
        console.log('Menu Component render is invoked');

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {/* {this.renderDish(this.state.selectedDish)} */}
                    
                </div>
            </div>

        );
    }
}
export default Menu;