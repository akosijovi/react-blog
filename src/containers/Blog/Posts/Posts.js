import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount () {
        axios.get('/posts')
            .then( response => {
                const posts = response.data.splice(0, 4);
                const updatedPost = posts.map( post =>{
                    return {
                    ...post,
                    author: 'Jovi'}
                });
                this.setState({posts: updatedPost});
            })
            .catch( error => {
                this.setState({error: true})
            } );
    }

    selectedPostIDHandler = (id) => {
        this.setState({selectedPostID: id});
    }

    render () {
        
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(
                post => {
                    return (
                        <Link 
                        to={'/' + post.id}
                        key={post.id}>
                            <Post 
                                title={post.title} 
                                author={post.author}
                                clicked={() => this.selectedPostIDHandler(post.id)}
                            />
                        </Link>
                    );
                }
            );
        }


        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;