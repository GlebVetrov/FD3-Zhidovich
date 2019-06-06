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

     getSumScale(): number {
          let len: number = this.item.getCount();
          let sum:number = 0;
          for (let i = 0; i < len; i++) {
               let obj: Product = this.item.getItem(i);
               sum = sum + obj.getScale();
          }
          console.log(this.item);
          return sum;
     }

     getNameList(): string {
          let len: number = this.item.getCount();
          let name:string ='';
          for (let i = 0; i < len; i++) {
               let obj: Product = this.item.getItem(i);
               name = name + " " + obj.getName();
          }
          console.log(this.item);
          return name;
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


let tomato: Product =  new Product(10, 'tomato');
let apple: Product =  new Product(20, 'apple');
let orange: Product =  new Product(30, 'orange');

let storageArray:ScalesStorageEngineArray  = new ScalesStorageEngineArray();

storageArray.addItem(tomato);
storageArray.addItem(apple);
storageArray.addItem(orange);


console.log(storageArray.getCount());
console.log(storageArray.getItem(1));


let scale = new Scales<ScalesStorageEngineArray> (storageArray);

console.log(scale.getNameList(), scale.getSumScale());