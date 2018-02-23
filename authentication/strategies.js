import passport from 'passport';
import Instagram from 'passport-instagram';

export function instagram(){
  const InstagramStrategy = Instagram.Strategy; 

  passport.use(new InstagramStrategy({
    clientID: "...",
      clientSecret: "...",
      callbackURL: "http://localhost:3000/auth/instagram/callback"
  }, (accessToken, refreshToken, profile, done) => {
      let user = {};
      user.name = profile.displayName;
      user.homePage = profile._json.data.website;
      user.image = profile._json.data.profile_picture;
      user.bio = profile._json.data.bio;
      user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=8`
      done(null, user)  
  }))
}