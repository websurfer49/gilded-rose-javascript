class item {
    constructor(name, sell_in, quality);
    this.name =name;
    this.sell_in = sell_in;
    this.quality = quality;
}

updateQuality(){
    this.sell_in = 1;
    if(this.quality > 2 && this.sell_in <0)
    this.quality -= 2;
    if(this.quality >= 1)
    this.quality -= 1;
}

var items [];

class DexVest {
    constructor(name, sell_in, quality);
    this.name;
    this.sell_in;
    this.quality;
}