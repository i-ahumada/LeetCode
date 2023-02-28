
class MyHashMap {
    MyHashMap() {
        return {}
    }
    
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this[key] = value;
    }
    
    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this[key] != undefined) {
            return this[key];
        }
        return -1;
    }
    
    /** 
     * @param {number} key
     * @return {void}
     */
    
    remove(key) {
        if(this[key] != undefined) {
            delete this[key];
        }
    }
}

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */