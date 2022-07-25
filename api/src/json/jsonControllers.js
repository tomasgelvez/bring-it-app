const { Product, User, Business, Category } = require('./../db');
const users = require('./user.json');
const categories = require('./category.json');
const businesses = require('./business.json');
const products = require('./products.json');
const {addProduct} = require('./../controllers/productControllers')

async function loadDB (){
    const usersLoad = users.forEach( async (u) => {
      await User.findOrCreate({
        where: {
          email: u.email,
          password: u.password,
          name: u.name,
          lastname: u.lastname,
          birthDate: u.birthDate
        }
      })
    }) ;
    console.log('Users saved successfully') ;
    const categoryLoad = categories.forEach( async (c) => {
      await Category.findOrCreate({
        where: {
          id: c.id,
          name: c.name
        }
      })
    }) ;
    console.log('Categories saved successfully') ;
    const businessesLoad = businesses.forEach( async (b) => {
      await Business.findOrCreate({
        where: {
          email: b.email,
          password: b.password,
          businessName: b.businessName,
          cuit: b.cuit,
          taxBracket: b.taxBracket,
          province: b.province,
          address: b.address,
          cityId: b.cityId
        }
      })
    }) ;
    console.log('Businesses saved successfully') ;
    const productsLoad = products.forEach( async (p) => {
         await Product.findOrCreate({
            where: {
              id: p.id,
              name: p.name,
              price: p.price,
              weight: p.weight,
              image: p.image,
              stock: p.stock,
              description: p.description,
              businessEmail: p.businessEmail
            }
          })
          const newProduct = await Product.findByPk(p.id);
          await newProduct.addCategory(p.categoryId);
      })
     ;
    console.log('Products saved successfully') ;
  }

  module.exports = {
    loadDB
};