import express from 'express';
import session from 'express-session';
import axios from 'axios';

import passport from './authentication/passport';
import { instagram } from './authentication/strategies';
import index from './routes/index';
import auth from './routes/auth';
import users from './routes/users';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug')

// Setting express sessions
app.use(session({
  secret: 'some random secret string',
  resave: true, 
  saveUninitialized: true
}))

// passport and instagram initialization 
passport(app);
instagram()

// 5. routing
app.use('/', index);
app.use('/users', users);
app.use('/auth', auth);

app.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
})

app.listen(port, () => console.log(`http://localhost:${port}`))