class Element {

    constructor(raw, code, tag) {
        this.raw = raw;
        this.code = code;
        this.tag = tag;
        this.next = null;
        this.prev = null;
    }

}

export default Element;