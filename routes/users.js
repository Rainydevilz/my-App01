const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/User')
const passport = require('passport')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', async (req, res) => {
  const { username, password, name } = req.body
  // simple validation
  if (!name || !username || !password) {
    return res.render('register', { message: 'Please try again' })
  }
  const passwordHash = bcrypt.hashSync(password, 10)
  const user = new User({
    name,
    username,
    password: passwordHash
  })
  await user.save()
  res.render('index', { user })
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/'}), async (req, res) => {
  const { username, password } = req.body
  return res.redirect('/')
})

// router.post(
//   '/login',
//   passport.authenticate('local', {
//     failureRedirect: '/login',
//     successRedirect: '/'
//   }),
//   async (req, res) => {
//     const { username, password } = req.body
//     // if (!username || !password) {
//     //   return res.render('register', { message: 'Please try again' })
//     // }
//     // const user = await User.findOne({
//     //   username
//     // })
//     // if (user) {
//     //   const isCorrect = bcrypt.compareSync(password, user.password)
//     //   if (isCorrect) {
//     //     // assign user to req object.
//     //     req.session.user = user;
//     //     return res.render('index', { user, title: 'FishMate AfterLoggin In'})
//     //   } else {
//     //     return res.render('login', { message: 'Username or Password incorrect' })
//     //   }
//     // } else {
//     //   return res.render('login', { message: 'Username does not exist.' })
//     // }
//     return res.redirect('/')
//   }
// )

// router.post(
//   '/login',
//   async (req, res) => {
//   const { username, password } = req.body
//   // simple validation
//   if (!username || !password) {
//     return res.render('register', { message: 'Please try again' })
//   }
//   const user = await User.findOne({
//     username
//   })
//   if (user) {
//     const isCorrect = bcrypt.compareSync(password, user.password)
//     if (isCorrect) {
//       // assign user to req object.
//       req.session.user = user;
//       return res.render('index', { user, title: 'FishMate AfterLoggin In'})
//     } else {
//       return res.render('login', { message: 'Username or Password incorrect' })
//     }
//   } else {
//     return res.render('login', { message: 'Username does not exist.' })
//   }

// })


// router.post(
//   '/login',
//   passport.authenticate('local', {
//     failureRedirect: '/login', // กำหนด ถ้า login fail จะ redirect ไป /login
//     successRedirect: '/' // ถ้า success จะไป /
//   }),
//   async (req, res) => {
//   const { username, password } = req.body
//   // add ++
//   return res.redirect('/')
//   // end ++
//   // simple validation
//   // if (!username || !password) {
//   //   return res.render('register', { message: 'Please try again' })
//   // }
//   // const user = await User.findOne({
//   //   username
//   // })
//   // if (user) {
//   //   const isCorrect = bcrypt.compareSync(password, user.password)
//   //   if (isCorrect) {
//   //     // assign user to req object.
//   //     req.session.user = user;
//   //     return res.render('index', { user, title: 'FishMate AfterLoggin In'})
//   //   } else {
//   //     return res.render('login', { message: 'Username or Password incorrect' })
//   //   }
//   // } else {
//   //   return res.render('login', { message: 'Username does not exist.' })
//   // }

// })

module.exports = router;
