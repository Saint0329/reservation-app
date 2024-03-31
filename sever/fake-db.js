const Product = require('./model/product')
class FakeDb{
    constructor(){
        this.products=[
            {
                coverImage:"./assets/phone-cover.jpg",
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                hedding1:'サンプルテキスト１',
                hedding2:'サンプルテキスト２',
                hedding3:'サンプルテキスト３',
                heddingtext1:'ああああああああああああああ',
                heddingtext2:'いいいいいいいいいいいいいい',
                heddingtext3:'うううううううううううううう'
              },
              {
                coverImage:"./assets/phone-cover.jpg",
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                hedding1:'サンプルテキスト１',
                hedding2:'サンプルテキスト２',
                hedding3:'サンプルテキスト３',
                heddingtext1:'ああああああああああああああ',
                heddingtext2:'いいいいいいいいいいいいいい',
                heddingtext3:'うううううううううううううう'
              },
              {
                coverImage:"./assets/phone-cover.jpg",
                name: 'Phone Standard',
                price: 299,
                description: '',
                hedding1:'サンプルテキスト１',
                hedding2:'サンプルテキスト２',
                hedding3:'サンプルテキスト３',
                heddingtext1:'ああああああああああああああ',
                heddingtext2:'いいいいいいいいいいいいいい',
                heddingtext3:'うううううううううううううう'
              },
              {
                coverImage:"./assets/phone-cover.jpg",
                name: 'Phone special',
                price: 999,
                description: '',
                hedding1:'サンプルテキスト１',
                hedding2:'サンプルテキスト２',
                hedding3:'サンプルテキスト３',
                heddingtext1:'ああああああああああああああ',
                heddingtext2:'いいいいいいいいいいいいいい',
                heddingtext3:'うううううううううううううう'
              }
        ]
    }

    async initDb(){
      await this.cleanDb()
      this.pushProductsToDb()
    }
    async cleanDb(){
      await Product.deleteMany({})
    }
    pushProductsToDb(){
        this.products.forEach(
            (product)=>{
                const newProdcut = new Product(product)
                newProdcut.save()
            }
        )
    }
    seeDb(){
        this.pushProductsToDb()
    }
}
module.exports=FakeDb
