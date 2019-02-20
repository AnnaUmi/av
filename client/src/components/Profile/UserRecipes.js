import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import CKEditor from "react-ckeditor-component";
import {
  GET_USER_RECIPES,
  DELETE_USER_RECIPE,
  GET_ALL_RECIPES,
  GET_CURRENT_USER,
  UPDATE_USER_RECIPE
} from "../../queries";
import { Link } from "react-router-dom";

class UserRecipes extends Component {
  state = {
    _id: "",
    name: "",
    imageUrl: "",
    category: "",
    description: "",
    instructions: "",
    modal: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleEditorChange = event => {
    const newContent = event.editor.getData();
    this.setState({ instructions: newContent });
  };
  handleDelete = deleteUserRecipe => {
    const confirmDelete = window.confirm(
      "Вы уверенны что хотите удалить статью?"
    );
    if (confirmDelete) {
      deleteUserRecipe().then(({ data }) => {
        //console.log(data)
      });
    }
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  loadPost = recipe => {
    this.setState({ ...recipe, modal: true });
  };
  handleSubmit = (event, updateUserRecipe) => {
    event.preventDefault();
    updateUserRecipe().then(({ data }) => {
      this.closeModal();
    });
  };
  render() {
    const { username } = this.props;
    const { modal } = this.state;
    return (
      <Query query={GET_USER_RECIPES} variables={{ username }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>error</div>;

          return (
            <div className="container">
              <div className="row">
                {modal && (
                  <EditPostModel
                    handleSubmit={this.handleSubmit}
                    recipe={this.state}
                    closeModal={this.closeModal}
                    handleChange={this.handleChange}
                    handleEditorChange={this.handleEditorChange}
                  />
                )}
                {!data.getUserRecipes.length && <p>У вас нет статей. </p>}
                <ul>
                  {data.getUserRecipes.map(recipe => (
                    <li key={recipe._id}>
                      <Link to={`/articles/${recipe._id}`}>
                        <h4>{recipe.name}</h4>
                      </Link>
                      <div>Likes: {recipe.likes}</div>
                      <Mutation
                        mutation={DELETE_USER_RECIPE}
                        variables={{ _id: recipe._id }}
                        refetchQueries={() => [
                          { query: GET_ALL_RECIPES },
                          { query: GET_CURRENT_USER }
                        ]}
                        update={(cache, { data: { deleteUserRecipe } }) => {
                          const { getUserRecipes } = cache.readQuery({
                            query: GET_USER_RECIPES,
                            variables: { username }
                          });
                          cache.writeQuery({
                            query: GET_USER_RECIPES,
                            variables: { username },
                            data: {
                              getUserRecipes: getUserRecipes.filter(
                                recipe => recipe._id !== deleteUserRecipe._id
                              )
                            }
                          });
                        }}
                      >
                        {(deleteUserRecipe, attrs = {}) => (
                          <div>
                            <button onClick={() => this.loadPost(recipe)}>
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                this.handleDelete(deleteUserRecipe)
                              }
                            >
                              {attrs.loading ? "deleting..." : "Delete"}
                            </button>
                          </div>
                        )}
                      </Mutation>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
const EditPostModel = ({
  handleSubmit,
  recipe,
  handleChange,
  closeModal,
  handleEditorChange
}) => (
  <Mutation
    mutation={UPDATE_USER_RECIPE}
    variables={{
      _id: recipe._id,
      imageUrl: recipe.imageUrl,
      name: recipe.name,
      category: recipe.category,
      description: recipe.description,
      instructions: recipe.instructions
    }}
  >
    {updateUserRecipe => (
      <div className="modal modal-open">
        <div className="modal-inner">
          <div className="modal-content">
            <form
              onSubmit={event => handleSubmit(event, updateUserRecipe)}
              className="modal-content-inner"
            >
              <h4>Edit post</h4>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={recipe.name}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="imageUrl"
                  onChange={handleChange}
                  value={recipe.imageUrl}
                />
              </div>
              <div className="form-group">
                <select
                  name="category"
                  value={recipe.category}
                  onChange={handleChange}
                >
                  <option value="JavaScrtip"> Java Scrtip</option>
                  <option value="CSS">CSS</option>
                  <option value="HTML">HTML</option>
                  <option value="React">React</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={recipe.description}
                />
              </div>
              <div className="form-group">
                <label htmlFor="instructions">Написать статью</label>
                <CKEditor
                  name="instructions"
                  content={recipe.instructions}
                  events={{ change: handleEditorChange }}
                />
              </div>
              <hr />
              <div className="modal-buttons">
                <button type="submit">Update</button>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
  </Mutation>
);
export default UserRecipes;
