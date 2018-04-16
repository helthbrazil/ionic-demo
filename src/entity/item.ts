export class Item {
    private id: number;
    private price: number;
    private name: string;
    private category_id : number;

    constructor(){}


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $price
     * @return {number}
     */
	public get $price(): number {
		return this.price;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $category_id
     * @return {number}
     */
	public get $category_id(): number {
		return this.category_id;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $price
     * @param {number} value
     */
	public set $price(value: number) {
		this.price = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $category_id
     * @param {number} value
     */
	public set $category_id(value: number) {
		this.category_id = value;
	}
    

}