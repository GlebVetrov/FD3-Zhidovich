class Scales {
     
     products: Array < IScalable > = [];

     constructor(..._products: Array < IScalable > ) {
          this.products = _products;
     }
     add(_product: IScalable): void {
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

interface IScalable {
     getScale(): number;
     getName(): string;
}

class Tomato implements IScalable {

     scale: number;
     name: string  = 'tomato';

     constructor(_scale:number) {
          this.scale = _scale;
     }

          getScale(): number {
               return this.scale;
          }
          
          getName(): string {
                return this.name;
          }
}

class Apple implements IScalable {
     
     scale: number;
     name: string  = 'apple';

     constructor(_scale:number) {
          this.scale = _scale;
     }

          getScale(): number {
               return this.scale;
          }
          
          getName(): string {
                return this.name;
          }
}

class Orange implements IScalable {
     
     scale: number;
     name: string = 'orange';

     constructor(_scale:number) {
          this.scale = _scale;
     }

          getScale(): number {
               return this.scale;
          }
          
          getName(): string {
                return this.name;
          }
}

let tomato:Tomato = new Tomato (50);
let apple = new Apple (70);
let orange = new Orange (100)

let scales = new Scales (tomato, apple, apple, tomato);

scales.add(orange)
console.log(scales.getNameList());
console.log(scales.getSumScale());