import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

const passwordValidator = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

  };
  UserSchema.path("password").validate(passwordValidator, "Password must be at least 8 characters long and include at least one letter, one digit, and one specifal charater.");  

export default mongoose.model('User', UserSchema);
