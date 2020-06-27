const  mongoose  = require('mongoose');
const productSchema = mongoose.model('ProductModel',new  mongoose.Schema(
  {


    Color: {

      type : String,
      required : true,
    },
    Category:{
        type : String,
      required : true,
    },
    ProductName:{
        type : Number,
      required : true,
    },
    Price :
    
      {
        type : String,
      required : true,

      },
      Description :
    
      {
        type : String,
      required : true,

      },
      Tag :
    
      {
        type : String,
      required : true,

      },
    ProductMaterial :
    
      {
        type : String,
      required : true,

      },
      ImageUrl :
    
      {
        type : String,
      required : true,

      },
      Createdat :
    
      {
        type : String,
      required : true,

      },
      Reviews:
    [
      {Rating:{
        type: String,
        required: true
      },
      Content:{
        type:String,
        required:true
      }
    }
    ],
    

  })
);
module.exports = mongoose.model("ProductModel");


