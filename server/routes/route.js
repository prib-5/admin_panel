import express , {Router} from 'express';
import User from '../schema/schema.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'uploads')
    },
    filename:function(req,file,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage : storage});

router.post('/add', async(req,res) =>{

    const user = new User()
    user.name = req.body.name
    user.mail = req.body.mail
    user.password = req.body.password
    
    user.save()
    res.status(201).json('success')
})

export default router