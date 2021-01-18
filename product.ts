import * as express from 'express';
const app = express();
export class Product {
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string
    ){}
}
const products:Product[] = [
    new Product(1,"商品1",1.99,1.5,"这是商品1"),
    new Product(2,"商品2",2.99,2.5,"这是商品2"),
    new Product(3,"商品3",3.99,3.5,"这是商品3"),
    new Product(4,"商品4",4.99,4.5,"这是商品4"),
    new Product(5,"商品5",5.99,4.5,"这是商品5")
];

app.get('/',(req, res) => {
    res.send("hello express");
});
app.get('/product',(req,res) => {
    res.json(products);
});

// 新增根据id查询数据的服务
app.get('/product/:id',(req,res) => {
    res.json(products.find((product) => product.id == req.params.id));
});

const serve = app.listen(18000,"localhost",() => {
    console.log("服务器已启动，地址为http://localhose:18000");
});