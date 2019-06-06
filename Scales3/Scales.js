var Scales = /** @class */ (function () {
    function Scales(_item) {
        this.item = _item;
    }
    Scales.prototype.getSumScale = function () {
        var len = this.item.getCount();
        var sum = 0;
        for (var i = 0; i < len; i++) {
            var obj = this.item.getItem(i);
            sum = sum + obj.getScale();
        }
        console.log(this.item);
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var len = this.item.getCount();
        var name = '';
        for (var i = 0; i < len; i++) {
            var obj = this.item.getItem(i);
            name = name + " " + obj.getName();
        }
        console.log(this.item);
        return name;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.product = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (_item) {
        this.product.push(_item);
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (_index) {
        return this.product[_index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.product.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var tomato = new Product(10, 'tomato');
var apple = new Product(20, 'apple');
var orange = new Product(30, 'orange');
var storageArray = new ScalesStorageEngineArray();
storageArray.addItem(tomato);
storageArray.addItem(apple);
storageArray.addItem(orange);
console.log(storageArray.getCount());
console.log(storageArray.getItem(1));
var scale = new Scales(storageArray);
console.log(scale.getNameList(), scale.getSumScale());
//# sourceMappingURL=Scales.js.map