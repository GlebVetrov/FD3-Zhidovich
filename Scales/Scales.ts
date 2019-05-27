class Scales {
     
     products: Array < Product > = [];
     constructor(..._products: Array < Product > ) {
          this.products = _products;
     }
     add(_product: Product): void {
          this.products.push(_product)
     }

     getSumScale(): number {
          let sum:number = 0;
          this.products.forEach((element) => {
               sum = sum + element.getScale();
          });
          return sum;
     }

     getNameList(): Array <string> {
          let names:Array<string> = [];
          this.products.forEach((element) => {
               names.push(element.getName())
          });
          return names;
     }
}

class Product {
     scale: number;
     name: string;
     constructor(_scale:number, _name:string);
     constructor(_scale:any, _name:any) {          
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

class Tomato extends Product {
     constructor(_scale:number, _name:string) {
          super(_scale, _name)
     }
}

class Apple extends Product {
     constructor(_scale:number, _name:string) {
          super(_scale, _name)          
     }
}

class Orange extends Product {
     constructor(_scale:number, _name:string) {
          super(_scale, _name)          
     }
}

let tomato = new Tomato (50, 'tomato');
let apple = new Apple (70, 'apple');
let orange = new Orange (100, 'orange')


let scales = new Scales (tomato, apple, apple, tomato);

scales.add(orange)
console.log(scales.getNameList());
console.log(scales.getSumScale());