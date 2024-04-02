
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
        select: false
    }
},
{
    timestamps: true
}
)

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
    required: true
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


const User = mongoose.model('User', UserSchema)
const FileManagement = mongoose.model('File', FileManagementSchema)
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {
    User,
  FileManagement,
  BlogPost
}
