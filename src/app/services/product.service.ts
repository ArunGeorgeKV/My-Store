import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
//   products: Product[] = [{
//     name: 'Wrist watch',
//     image: 'assets/watch.webp',
//     description: `Good Looking Watches`,
//     alter: `alternative to the watch image`,
//     price: 1200,
//     isAvailable: false
//    },
//   {
//     name: `Nike Shoe`,
//     image: `https://render.nikeid.com/ir/render/nikeidrender/airPrestoFA18_v1?obj=/s/g5&color=c42122&show&obj=/s/g17&color=c80225&show&obj=/s/g14&color=bd1f32&show&obj=/s/g16&color=b83137&show&obj=/s/g4&color=c80225&show&obj=/s/g6&color=c80225&show&obj=/s/g15&color=b3222a&show&obj=/s/g7&color=ffffff&show&obj=/s/g8&color=ffffff&show&obj=/s/g18&color=141414&show&obj=/s/g10&color=1a1b1b&show&obj=/s/g2/inverse&color=be1d2a&show&obj=/s/g1&color=b83137&show&obj=/s/g13/nike&color=c91026&show&obj=/s/g19&color=c80225&show&obj=/s&req=object&fmt=png-alpha&sharpen=1&op_usm=0.5,1.2,0&posN=0,-0.1&sharpen=1&op_usm=0.5,1.2,0&posN=0,-0.1&fmt=png-alpha&wid=2000&fmt=png-alpha&wid=640`,
//     description: `Good Looking Shoes`,
//     alter: 'Nothing to show',
//     price: 2500,
//     isAvailable: true
//   },
// {
//   name: `Belt`,
//   image: `assets/belt.jpg`,
//   description: `Leather Belt`,
//   alter: `Nothing`,
//   price: 400,
//   isAvailable: true
// },
// {
//   name: `Water Bottle`,
//   image: `assets/waterbottle.png`,
//   description: `1L capable bottle`,
//   alter: `nothing`,
//   price: 300,
//   isAvailable: true
// },
// {
//   name: `Laptopbag`,
//   image: `assets/laptopbag.jpg`,
//   description: `20L Bag`,
//   price: 500,
//   isAvailable: false
// },
// {
//   name: `Sunglass`,
//   image: `assets/sunglass.jpg`,
//   description: `Sunglasses`,
//   price: 450,
//   isAvailable: true
// },
// {
//   name: `Wireless Headphone`,
//   image: `assets/headphone.jpg`,
//   description: `wireless headphones`,
//   price: 800,
//   isAvailable: true
// }];
  constructor(private httpClient: HttpClient) { }
  getProducts() {
    return this.httpClient.get(`http://localhost:3000/product`);
  }
}
