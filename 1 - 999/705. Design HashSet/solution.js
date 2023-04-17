class MyHashSet {
    MyHashSet() {
        return {};
    }

    add(key) {
        this[key] = key;
    }
    
    remove(key) {
        if(this[key] != undefined){
            delete this[key]
        }
    }
    
    contains(key) {
        if(this[key] != undefined) {
            return true;
        } 
        return false;
    }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */