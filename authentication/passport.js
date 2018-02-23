import passport from 'passport';

export default function(app) {
  // initialise passport
  app.use(passport.initialize());
  app.use(passport.session());

  // setting passport 
  passport.serializeUser((user, done) => {
    done(null, user)
  })
  passport.deserializeUser((user, done) => {
    done(null, user)
  })
}