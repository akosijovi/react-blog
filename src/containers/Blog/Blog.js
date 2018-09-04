import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import asyncLoadImport from '../../hoc/asyncLoadImport';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
const asyncNewPost = asyncLoadImport( () => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state ={
        isAuthenticated: true
    }

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: 'submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.isAuthenticated ? <Route path="/new-post" component={asyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={ () => <h1>404 Not Found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */ }
                </Switch>
            </div>
        );
    }
}

export default Blog;