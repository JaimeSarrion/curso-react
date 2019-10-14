import React, { Component } from 'react';
import Axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        post: [],
        selectedPostId : null
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const post = response.data.slice(0,4)
                const updatedPost = post.map(post => {
                    return {
                        ...post,
                        author: 'Jaime'
                    }
                })

                this.setState({ post: updatedPost })
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        const posts = this.state.post.map((post) => {
            return <Post 
                key={post.id} 
                title={post.title}
                author= {post.author} 
                click = {()=>this.postSelectedHandler(post.id)}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;