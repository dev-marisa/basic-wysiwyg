import Element from './Element';

class ElementList {

    constructor() {
        this.head = null;
        this.tail = null;
        // various multiline elements
        this.in_code = false;
        this.in_ul = false;
        this.in_ol = false;
        this.in_table = false;
    }

    addElement(raw) {
        // TODO - use raw text line to create a new Element
    }

    getCode() {
        // TODO - convert the list of elements to an HTML string
    }

}

export default ElementList;