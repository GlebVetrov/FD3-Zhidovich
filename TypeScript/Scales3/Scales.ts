interface IStorageEngine {
     addItem(_item: Product):void;
     getItem(_index: number): Product;
     getCount():number;
}

class Scales<StorageEngine extends IStorageEngine> {

    item: StorageEngine;
    

     constructor(_item: StorageEngine) {
          this.item = _item;
          
     }

     add(_item: Product):void {
          this.item.addItem(_item);
     }

     getSumScale(): number {
          let len: number = this.item.getCount();
          let sum:number = 0;
          for (let i = 0; i < len; i++) {
               let obj: Product = this.item.getItem(i);
               sum = sum + obj.getScale();
          }
          
          return sum;
     }

     getNameList(): string[] {
          let len: number = this.item.getCount();
          let name: string[]  = [];
          for (let i = 0; i < len; i++) {
               let obj: Product = this.item.getItem(i);
               name.push(obj.getName());
          }
          
          return name;
     }
}

class Product {

     private scale: number;
     private name: string ;

     constructor(_scale:number, _name: string) {
          this.scale = _scale;
          this.name = _name;
     }

          getScale(): number {
               return this.scale;
          }
          
          getName(): string {
                return this.name;
          }

}

class ScalesStorageEngineArray implements IStorageEngine{

     product: Array < Product >  = [];

     constructor() {

     }

     addItem(_item: Product): void {
          this.product.push(_item)
     };

     getItem(_index: number): Product{

            return this.product[_index];
        
     };
     getCount():number{
        return this.product.length;
     };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
     
     product: Array < Product >  = [];

     constructor() {

     }

     addItem(_item: Product): void {
          if (localStorage['product']) {
               this.product =  JSON.parse(localStorage['product']);
               this.product.push(_item);
               localStorage['product'] = JSON.stringify(this.product);
          } else {
               this.product.push(_item);
               localStorage['product'] = JSON.stringify(this.product);
          }
          
     };

     getItem(_index: number): Product{
          if (localStorage['product']) {
            let arr: any = JSON.parse(localStorage['product']);
            let name: string = arr[_index].name;
            let scale: number = arr[_index].scale;
            let product: Product = new Product(scale, name);  
            console.log(product);      
            return product;
          }
          return;
     };
     getCount():number{
          if (localStorage['product']) {
               let arr: any= JSON.parse(localStorage['product']);
               return arr.length;
          }
          return 0;
     };
}


let tomato: Product =  new Product(10, 'tomato');
let apple: Product =  new Product(20, 'apple');
let orange: Product =  new Product(30, 'orange');


let storageArray:ScalesStorageEngineArray  = new ScalesStorageEngineArray();
let storageLocal:ScalesStorageEngineLocalStorage  = new ScalesStorageEngineLocalStorage();

// почему то тут могу менять местами storageLocal и storageArray и нет ошибки
let scaleArray = new Scales<ScalesStorageEngineArray> (storageArray);
let scaleLocal = new Scales<ScalesStorageEngineLocalStorage> (storageLocal);

scaleArray.add(tomato);
scaleArray.add(apple);
scaleArray.add(orange);

scaleLocal.add(tomato);
scaleLocal.add(apple);
scaleLocal.add(orange);

console.log(scaleArray.getNameList());
console.log(scaleArray.getSumScale());

console.log(scaleLocal.getNameList());
console.log(scaleLocal.getSumScale());