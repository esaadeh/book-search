import React, {Component} from "react";
import API from "../utils/API";
class Books extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        API
            .getAllBooks()
            .then(res => this.setState({books: res.data}))
    }

    render() {
        return(
            <div className="books">
                <h1>Books</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author(s)</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book => (
                            <tr key={book.name}>
                                <td>{book.name}</td>
                                <td><a href={book.github}>{book.github}</a></td>
                                <td><a href={book.linkedin}>{book.linkedin}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
}

export default Books;