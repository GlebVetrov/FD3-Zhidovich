var Scales = /** @class */ (function () {
    function Scales(_item) {
        this.item = _item;
    }
    Scales.prototype.add = function (_item) {
        this.item.addItem(_item);
    };
    Scales.prototype.getSumScale = function () {
        var len = this.item.getCount();
        var sum = 0;
        for (var i = 0; i < len; i++) {
            var obj = this.item.getItem(i);
            sum = sum + obj.getScale();
        }
        return sum;
    };
    Scales.prototype.getNameList = function () {
        var len = this.item.getCount();
        var name = [];
        for (var i = 0; i < len; i++) {
            var obj = this.item.getItem(i);
            name.push(obj.getName());
        }
        return name;
    };
    return Scales;
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
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.product = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (_item) {
        if (localStorage['product']) {
            this.product = JSON.parse(localStorage['product']);
            this.product.push(_item);
            localStorage['product'] = JSON.stringify(this.product);
        }
        else {
            this.product.push(_item);
            localStorage['product'] = JSON.stringify(this.product);
        }
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (_index) {
        if (localStorage['product']) {
            var arr = JSON.parse(localStorage['product']);
            var name_1 = arr[_index].name;
            var scale = arr[_index].scale;
            var product = new Product(scale, name_1);
            console.log(product);
            return product;
        }
        return;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        if (localStorage['product']) {
            var arr = JSON.parse(localStorage['product']);
            return arr.length;
        }
        return 0;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var tomato = new Product(10, 'tomato');
var apple = new Product(20, 'apple');
var orange = new Product(30, 'orange');
var storageArray = new ScalesStorageEngineArray();
var storageLocal = new ScalesStorageEngineLocalStorage();
var scaleArray = new Scales(storageArray);
var scaleLocal = new Scales(storageLocal);
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
//# sourceMappingURL=Scales.js.map