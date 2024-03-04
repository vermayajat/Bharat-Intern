const express = require('express');
const mongoose = require('mongoose');
const postRouter = require('./routes/post');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/blog-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
