module.exports = function Cart(oldCart){
	this.items = oldCart.items || {};
	this.totalQty = oldCart.totalQty || 0;
	this.totalPrice = oldCart.totalPrice || 0;

	this.add = (item, id) => {
		let storeItem = this.items[id];
		if (!storeItem) {
			storeItem = this.items[id] = {
				item,
				qty: 0,
				price: 0
			};
		}
		storeItem.qty++;
		storeItem.price = storeItem.qty * storeItem.item.priceProduct;
		this.totalQty++;
		this.totalPrice += storeItem.item.priceProduct;
	};
	this.reduceByOne = (id) => {
		this.items[id].qty--;
		this.items[id].priceProduct -= this.items[id].item.priceProduct;
		this.totalQty--;
		this.totalPrice -= this.items[id].item.priceProduct;
		if (this.items[id].qty <= 0) {
			delete this.items[id];
		}
	};
	this.removeAll = (id) => {
		this.totalQty -= this.items[id].qty;
		this.totalPrice -= this.items[id].item.priceProduct * this.items[id].qty;
		delete this.items[id];
	}
	this.generateArray = () => {
		var arr = [];
		for(var id in this.items){
			arr.push(this.items[id]);
		}
		return arr;
	};
};