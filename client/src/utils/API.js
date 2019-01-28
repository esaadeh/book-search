import axios from "axios";

export default {
    getAllBooks: function() {
        return axios.get("/api/books");
    },

    saveBook: function(book) {
        return axios.post("/api/save", book);


// Delete book

    }
};