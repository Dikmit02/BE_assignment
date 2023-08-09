import { Knex } from "knex";
const data=require("../data.json")

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert( 
         data.products.map((product)=>({
          ...product,
          features:JSON.stringify(product?.features),

         }))
       )};
