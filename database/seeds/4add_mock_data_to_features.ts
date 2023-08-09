import { Knex } from "knex";
const data=require("../data.json")

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("features").del();



    let payload=[];
    data.products.forEach((prod)=>{
        prod.features.forEach((feature)=>{
            payload.push({
                ...feature,
                productId:prod?.productId
            })
        })
    })


    // Inserts seed entries
    await knex("features").insert( 
payload
    )
    
};
