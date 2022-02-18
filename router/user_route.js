const express = require('express')
const router = express.Router()
const {getAllUser,addUser,DeleteUser, findUser} = require('../controller/controller')

//routes
// router.get('/', (req,res)=>{
//     res.json({})    
// })
router.route('/Users').get(getAllUser).post(addUser)
router.route('/Users/:id').delete(DeleteUser)
router.route('/Users/finduser').get(findUser)



module.exports = router