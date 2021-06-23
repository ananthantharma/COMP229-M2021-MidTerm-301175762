/* Student Name: Ananthan Tharmavelautham
Student #:301175762
Date: 06/23/2021
File Name: COMP229 - midterm
*/


import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model class
const BookSchema = new Schema
({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

const Model = mongoose.model('Book', BookSchema);
export default Model;