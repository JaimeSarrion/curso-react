import React, { Component } from 'react'
import Axios from 'axios'
import Post from '../../components/Post/Post'
import { Route} from 'react-router-dom'

import './Posts.css'
import FullPost from '../FullPost/FullPost'



class Posts extends Component {

    state = {
        post: [],
        selectedPostId: null,
        error: null
    }

    componentDidMount() {
        console.log(this.props)
        Axios.get('/posts')
            .then((response) => {
                const post = response.data.slice(0, 4)
                const updatedPost = post.map(post => {
                    return {
                        ...post,
                        author: 'Jaime'
                    }
                })

                this.setState({ post: updatedPost })
            }).catch(err => {
                console.log(err)
                // this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({ pathname: '/' + id });
        this.props.history.push('/' + id)
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.post.map((post) => {
                return (
                    // <Link to={'/' + post.id} >
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        click={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost} />
            </div>

        )
    }
}

export default Posts