import mongoose from 'mongoose';
mongoose.connect(
  'mongodb+srv://junior:Junior123@cluster0.aebys.mongodb.net/linkapi?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }

);
mongoose.Promise = global.Promise;

export default mongoose;
