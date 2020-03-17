const Product=require('../models/Product')
const responseHandler=require('../utils/response-handler');

async function create(req,res,next){
  try {
    let productFiles=[];
    allfiles=req.files;
    if(allfiles) {
        allfiles.forEach(element => {
          console.log('element',element);
          filepath=`products/${element.filename}`
          filename=element.filename
          productFiles.push(filepath)
        });
    }
      
    console.log('picture:',productFiles,)
    let product={
      name:req.body.name,
      tag:req.body.tag,
      price:+req.body.price,
      recommendedPrice: +req.body.recommendedPrice,
      description:req.body.description,
      images:productFiles,
      createdBy: req.user._id
    }
    let newProduct= await Product(product).save()
    console.log(newProduct);
    if(newProduct){
      responseHandler(res,200,newProduct);
    }
    else{
      responseHandler(res,500,{msg:'Error while creating Product'});
    }
  } catch (error) {
      console.error(error)
    responseHandler(res,500,error);
  }
}
async function update(req,res,next){
  try {
    const id=req.params.id;
    let updatedobj=req.body;
    await Product.findOneAndUpdate({_id:id},{$set:updatedobj},{new:true},(error,document)=>{
      if(error){
        responseHandler(res,500,error);
      }
      console.log(document);
      responseHandler(res,200,document);
    })
  } catch (error) {
    responseHandler(res,500,error.msg);
  }
}
async function del(req,res,next){
  try {
    id=req.params.id;
    await Product.findByIdAndDelete({_id:id},(error,document)=>{
      if(error){
        responseHandler(res,500,error);
      }
      console.log(document);
      responseHandler(res,200,document);
    })
  } catch (error) {
    responseHandler(res,500,error.msg);
  }
}
async function getAll(req,res,next){
  console.log('getAll')
  try {
    var pageOptions = {
      page: +req.query.page || 0,
      limit: +req.query.limit || 10
    }
    const product=await Product.find({})
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit).exec()
    const count= await Product.count({});
    responseHandler(res,200,{product:product,count,count})
  } catch (error) {
    responseHandler(res,500,error.msg);
  }
}
async function getByUser(req,res,next){
  console.log('getByUser')
  try {
    var pageOptions = {
      page: +req.query.page || 0,
      limit: +req.query.limit || 10
    }
    console.log('req.user',req.user)
    const product=await Product.find({createdBy: req.user._id})
    .skip(pageOptions.page*pageOptions.limit)
    .limit(pageOptions.limit).exec()
    const count= await Product.count({});
    responseHandler(res,200,{product:product,count,count})
  } catch (error) {
    responseHandler(res,500,error.msg);
  }
}
async function getById(req,res,next){
  try {
    id=req.params.id;
    await Product.findById({_id:id},(error,document)=>{
      if(error){
        responseHandler(res,500,error);
      }
      console.log(document);
      responseHandler(res,200,document);
    })
  } catch (error) {
    responseHandler(res,500,error.msg);
  }
}
module.exports={
  create,
  update,
  del,
  getAll,
  getByUser,
  getById
}
