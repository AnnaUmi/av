import React, { Component } from 'react';
import withSession from '../withSession';
import { Mutation } from 'react-apollo';
import { LIKE, GET_RECIPE, UNLIKE } from '../../queries';

class Like extends Component {
    state = {
        liked: false,
        username: ''
    }

    componentDidMount() {
        if (this.props.session.getCurrentUser) {
            const { username, favorites } = this.props.session.getCurrentUser;
            const { _id } = this.props;
            const prevLiked = favorites.findIndex(favorite => favorite._id === _id) > -1;
            this.setState({
                liked: prevLiked,
                username
            })
        }
    }
    handleClick = (like, unlike) => {
        this.setState(prevState => (
            {
                liked: !prevState.liked
            }),
            () => this.handleLike(like)
        )
    }
    handleLike = (like, unlike) => {
        if (this.state.liked) {
            like().then(async ({ data }) => {
                await this.props.refetch();
            });
        } else {
            unlike().then(async ({ data }) => {
                await this.props.refetch();
            });
        }

    }
    updateLike = (cache, { data: { like } }) => {
        const { _id } = this.props;
        const { getRecipe } = cache.readQuery({ query: GET_RECIPE, variables: { _id } });

        cache.writeQuery({
            query: GET_RECIPE,
            variables: { _id },
            data: {
                getRecipe: { ...getRecipe, likes: like.likes + 1 }
            }
        })
    };
    updateUnlike = (cache, { data: { unlike } }) => {
        const { _id } = this.props;
        const { getRecipe } = cache.readQuery({ query: GET_RECIPE, variables: { _id } });

        cache.writeQuery({
            query: GET_RECIPE,
            variables: { _id },
            data: {
                getRecipe: { ...getRecipe, likes: unlike.likes - 1 }
            }
        })
    };
    render() {
        const { username } = this.state;
        const { _id } = this.props;
        let classes = "fa fa-heart";
        if (!this.state.liked) classes += "-o";
        return (
            <Mutation 
                mutation={UNLIKE} 
                variables={{ _id, username }}
                update={this.updateUnlike}
                >
                {(unlike) => (
                    <Mutation
                        update={this.updateLike}
                        mutation={LIKE}
                        variables={{ _id, username }}>
                        {like => {
                            return (

                                username && <i onClick={() => this.handleClick(like, unlike)} className={classes} aria-hidden="true"></i>)
                        }
                        }

                    </Mutation>
                )}

            </Mutation>

        )
    }

}
export default withSession(Like)