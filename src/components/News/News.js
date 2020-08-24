import React, { Component } from 'react';
import { connect } from 'react-redux';


import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux';
import classes from './News.css';
import Post from './Post/Post';
import Comment from './Comment/Comment';
import * as actions from '../../store/actions/news';


class News extends Component {
    
    componentDidMount = () => {
        if (this.props.posts.length === 0) {
            this.props.onInitNews();
        }
    }

    onChangeHandler(event) {
        if (event.target.id === 'name') {
            this.props.onSetCommentName(event.target.value);
        } else {
            this.props.onSetCommentBody(event.target.value);
        }
    }
    submitCommentHandler = () => {
        const payload = {
            name: this.props.name,
            comment: this.props.comment
        }
        this.props.onSubmitComment(payload);
    }

    render() {
        let posts = <p>Loading posts...</p>;
        if (!this.props.err) {
            posts = this.props.posts.map(renderPost => {
                return <Post
                    key={renderPost.id}
                    title={renderPost.title}
                    body={renderPost.body}
                ></Post>

            });
        } else {
            posts = <p>There was an error fetching the news</p>
        }

        return (
            <Aux>
                <div>
                    {posts}
                </div>
                <hr />
                <h3>{this.props.commentMessage}</h3>
                <Comment
                    name={this.props.name}
                    comment={this.props.comment}
                    changed={event => this.onChangeHandler(event)}
                    submitCommet={this.submitCommentHandler}
                ></Comment>
            </Aux>

        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.nws.cmpPosts,
        err: state.nws.error,
        name: state.nws.name,
        comment: state.nws.comment,
        commentMessage: state.nws.commentMsg
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitNews: () => dispatch(actions.initNews()),
        onSetCommentName: (name) => dispatch(actions.setCommentName(name)),
        onSetCommentBody: (body) => dispatch(actions.setCommentBody(body)),
        onSubmitComment: (payload) => dispatch(actions.submitComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withClass(News, classes.News));