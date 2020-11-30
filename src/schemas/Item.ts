import { Column } from 'typeorm';
import { Double } from 'mongodb';

class Item {
    @Column()
    item_title: string;

    @Column()
    quantity: number;

    @Column()
    unit_price: Double;
}

export default Item;