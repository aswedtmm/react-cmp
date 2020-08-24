import React, { Component } from 'react';
import withClass from '../../../hoc/WithClass';
import classes from './Comment.css';


class Comment extends Component {
    render() {
        return (
            <div className={classes.CommentContainer}>
                <h3 className={classes.CommetTitile}>Add a comment</h3>
                <form action="">
                    <input id="name" placeholder="Your name" type="text" value={this.props.name} onChange={this.props.changed} />
                    <br /><br />
                    <textarea id="comment" placeholder="Comment" type="text" value={this.props.comment} onChange={this.props.changed} />
                    <br /><br />
                    <button type="button" onClick={this.props.submitCommet}>Submit</button>
                </form>

            </div>
        );
    }
}

export default withClass(Comment);