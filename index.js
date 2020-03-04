const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose-1', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});


const UserSchema = new mongoose.Schema({
  name: {type: 'string', required: true},
  email: {type: 'string', required: true, unique: true},
  avatarUrl: 'string',
  isDeleted: {type: 'boolean', default: false}
});

const User = mongoose.model('User', UserSchema);

async function main() {
  await User.create({ email: 'brayn003@gmail.com' });
  await User.create({ name: 'Prashant Paddune', email: 'prashant@abc.xyz' });
  await User.create({ name: 'Hamdan', email: 'hamdan@abc.xyz', isDeleted: true });
  console.log('DONE Writing!');
  const users = await User.find({ isDeleted: false });
  console.log('IN DB', users);
}

main();

