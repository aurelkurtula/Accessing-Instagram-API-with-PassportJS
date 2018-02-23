import express from 'express';
import passport from 'passport';
const router = express.Router();

router
  .get('/instagram', passport.authenticate('instagram'))
  .get('/instagram/callback', passport.authenticate('instagram', {
    successRedirect: '/users',
    failure: '/error'
  })) 

export default router;

