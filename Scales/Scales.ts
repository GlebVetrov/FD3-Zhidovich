type Products = Tomato | Orange | Apple;

class Scales {
     
     products: Array < Products > = [];
     constructor(..._products: Array < Products > ) {
          this.products = _products;
     }
     add(_product: Products): void {
          this.products.push(_product)
     }

     getSumScale(): void {
          let sum:number = 0;
          this.products.forEach((element) => {
               sum = sum + element.getScale();
          });
          console.log(sum);
     }

     getNameList(): void {
          let names:Array<string> = [];
          this.products.forEach((element) => {
               names.push(element.getName())
          });
          console.log(names);
     }
}

class Product {
     scale: number;
     name: string;
     constructor(_scale:number, _name:string) {          
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
scales.getNameList();
scales.getSumScale();