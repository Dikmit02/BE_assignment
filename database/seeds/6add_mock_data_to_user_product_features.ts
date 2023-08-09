import { Knex } from "knex";
const data=require("../data.json")

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_product_features").del();



    let payload=[];
    await data.users.forEach(async(user)=>{
        const {id} = await knex('users').select('id').where({username:user?.username}).first() || {};
        user.productFeatures.forEach( (chart)=>{
            payload.push({
                userId:id,
                productFeatureId:chart
            })
        })
    })


    // Inserts seed entries
    await knex("user_product_features").insert( 
payload
    )
    
};
