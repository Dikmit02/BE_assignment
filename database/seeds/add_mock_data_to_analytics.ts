import { Knex } from "knex";
const data=require("../data.json")

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("analytics").del();

    // Inserts seed entries
    await knex("analytics").insert( 
         data.analytics.map((analytic)=>({
          ...analytic,
          data:JSON.stringify(analytic?.data),

         }))
       )};
