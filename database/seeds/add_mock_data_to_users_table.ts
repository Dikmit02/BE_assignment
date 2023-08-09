import { Knex } from "knex";
const data=require("../data.json")

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert( 
         data.users.map((user)=>({
          ...user,
          charts:JSON.stringify(user?.charts),
          productFeatures:JSON.stringify(user?.productFeatures),

         }))
       )};
