import { Knex } from "knex";
const data=require("../data.json")
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert( 
         data.products.map((product)=>({
          productId:product?.productId,
          productName:product?.productName
        }
      )
    )
    )

};
