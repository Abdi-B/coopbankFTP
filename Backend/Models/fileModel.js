
const mongoose = require('mongoose');
var validator = require('validator');

const Schema = mongoose.Schema


const FileManagementSchema =  mongoose.Schema({
    originalName: {
        type: String,
        required: true
    },
    MimeType: {
        type: Number,
        required: true
    },
    fileName: {
        type: Number,
        required: true
    },
    path: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const blogPostSchema = new Schema({

  title: {
    type: String,
    required: [true, "please enter its Title"]
  },
  content: {
    type: String,
    required: true
  },
},
{
    timestamps: true
}
);

// Document and query middleware of mongoose
// middleware --- save is for 'save and create '
// UserSchema.pre('save', function (next) {
//     this.createdBy = 'Abdi';

//     next();  
// })
// find and findOne is different so, to handle it use /*find/ --> this mean all which starts with find
// UserSchema.pre('find', (next) => {
//   this.find({releaseDate: {lte: Date.now}})
//   next();
// });



const FileManagement = mongoose.model('File', FileManagementSchema)
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {
  FileManagement,
  BlogPost
}
