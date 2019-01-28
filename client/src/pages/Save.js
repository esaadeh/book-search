import React, { Component } from "react";
import API from "../utils/API";

class Save extends Component {

    state = {
        title: "",
        authors: "",
        description: "",
        image: "",
        link: ""
    };

    handleInputChange = e => {
        const { title, value } = e.target;
        this.setState({
            [title]: value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        API
            .saveBook(this.state)
            .then(res => {
                alert(`Saved: ${res.data.title}`)
                this.setState({
                    title: "",
                    authors: "",
                    description: "",
                    image: "",
                    link: ""
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="save">
                <h1>Save Book</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Book Title"
                            onChange={this.handleInputChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="authors">Authors</label>
                        <input
                            type="text"
                            className="form-control"
                            name="authors"
                            placeholder="Book Authors"
                            onChange={this.handleInputChange}
                            value={this.state.author}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Book Description"
                            onChange={this.handleInputChange}
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="Book Image URL"
                            onChange={this.handleInputChange}
                            value={this.state.image}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="link"
                            placeholder="Book Link URL"
                            onChange={this.handleInputChange}
                            value={this.state.link}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
}

export default Save;