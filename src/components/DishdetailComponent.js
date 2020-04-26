import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

    }

    renderComments(comments) {
        const comment = comments.map((comment) => {

            const dt = new Date(comment.date);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var mm = monthNames[dt.getMonth()];
            var dd = dt.getDate();
            var yyyy = dt.getFullYear();
            var format = mm +' '+ dd + ', ' + yyyy

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

    render() {
        const dish = this.props.dish;
        if(dish == null){
            return (
                <div></div>
            )
        }
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;