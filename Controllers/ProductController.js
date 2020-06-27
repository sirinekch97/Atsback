const ProductModel = require('../Models/ProductModel')
var Request = require("request");

const url = 'http://test.ats-digital.com:3000/products?size=100';



module.exports = {
    fetch: function (req, res) {


        Request.get("http://test.ats-digital.com:3000/products?size=100", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            data = JSON.parse(body)
            data.products.map(document => {
                const product=new ProductModel()
                product.Category = document.category ;
                product.Color = document.color ;
                product.ProductName = document.productName ;
                product.Price = document.price ;
                product.Description = document.description ;
                product.Tag = document.tag ;
                product.ProductMaterial = document.productMaterial ;
                product.Reviews = document.reviews ;
                product.ImageUrl = document.imageUrl ;
                product.save().then(
                    res => console.log(res)
                ).catch(err => console.log(err))
            })
        });
       

        /*product.save()
            .then(

                saved => {
                    console.log(saved);
                    



                })
            .catch(error => { throw error });*/
    }

    ,

    findall: function (req, res) {
        ProductModel.find({})
        .then(data=>{
                console.log(data)
                res.status(200).json(data)
            
        })
        .catch(
            error => { throw error }

        )

        

    },
    find: function (req, res) {
        ProductModel.findById({ _id: req.params.id })
            .then(data=>{console.log(data)
                    res.status(200).json(data)
            })
            .catch(error => { throw error })

       

    }






}