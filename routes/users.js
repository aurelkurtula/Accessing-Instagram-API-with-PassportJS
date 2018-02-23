import express from 'express';
import axios from 'axios';
const router = express.Router();

router
  .use('/', (req,res, next) => {
    if(!req.user){
      res.redirect('/')
    }
    next()
  })
  .get('/', (req, res) => {
    axios.get(req.user.media)
    .then(function (response) {
      const data = response.data.data;
      let user = req.user;
      user.images = data.map(img => img.images);
      res.render('instagram', user)  
    })
  })

export default router;







