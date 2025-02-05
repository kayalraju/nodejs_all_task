const Teacher=require('../model/unlinkImageModel/Teacher')
const path=require('path')
const fs=require('fs')
const { log } = require('console')

class UnlinkImageController{


    async unlinkImage(req,res){
        try{
            const teacher=await Teacher.find()  
            res.render('unlink/unlink',{
                data:teacher,
            })

        }catch(err){
            console.log(err);
            
        }
    }


async unlinkImageadd(req,res){
        try{
            res.render('unlink/add',{
                data:"teacher",
            })
        }catch(err){
            console.log(err);

        }
    }

    async unlinkImageCreate(req,res){
        try {
            const teacher = await new Teacher({
                name: req.body.name,
            })
            if(req.file){
                teacher.image=req.file.path
               }
    
            const result = await teacher.save()
            if (result) {
                res.redirect('/unlink')
            } else {
                res.redirect('/unlink/add')
            }
        } catch (err) {
            console.log(err);
        }
    }


    async unlinkedit(req,res){
        try{
            const id=req.params.id
            const editteacher=await Teacher.findById(id)
            res.render('unlink/edit',{
                data:editteacher,
            })
        }
        catch(err){
            console.log(err);
        }
    }


    async unlinkupdate(req,res){
        const id = req.params.id;
        const newImage = req.file.path;
        try {
            //Remove the previous image file if a new image was uploaded
            const df=await Teacher.findById(id)
            console.log('ee',df);
            fs.unlinkSync(df.image)
          const updatedUser = await Teacher.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                image: newImage,
            },
            { new: true }
          );
          
          res.redirect("/unlink");    
        } catch (err) {
          console.error(err);
        
        }
    }

    async deleteImage(req,res){
        log('ssss',req.params.id)
        try{
            const id = req.params.id
            const dlee = await Teacher.findByIdAndDelete(id)
            if(dlee){
             //for delete image from upload folder folder
             fs.unlink(dlee.photo)
             res.redirect('/')
            }
          }catch(err){
         console.log(err);
          }
        }
}




module.exports = new UnlinkImageController();