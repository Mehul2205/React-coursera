import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';

    function renderComments(comments) {
        const comment = comments.map((comment) => {

            const dt = new Date(comment.date);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var mm = monthNames[dt.getMonth()];
            var dd = dt.getDate();
            var yyyy = dt.getFullYear();
            var format = mm +' '+ dd + ', ' + yyyy
            
            // Another way to print date 
            // {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}

            return(
                <ul className = "list-unstyled" key={comment.id}>
                    <li className="p-1">{ comment.comment }</li>
                    <li className="p-1">-- {comment.author}, {format} </li>
                </ul>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                <div>{comment}</div>
            </div>
        );
    }

    function RenderDish(dish) {
        return(
            <Card  key={dish.id}>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    const DishDetail = (props) =>{
        if(props.dish == null){
            return (
                <div></div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(props.comments)}
                    </div>
                </div>
            </div>
        );
    }
    

export default DishDetail;