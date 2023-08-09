
import { Knex } from "knex";
const data=require("../data.json")
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const payload=[]

 for await (const user of data?.users) {
  payload.push(
    {password:await bcrypt.hash(user?.password, process.env.BCRYPT_SALT),
    displayname:user?.displayname,
    firstname:user?.firstname,
    email:user?.email,
    lastname:user?.lastname,
    username:user?.username,
    profile:user?.profile,
    organization:user?.organization,
    dob:user?.dob}
  )
    }
    
    // Inserts seed entries
    await knex("users").insert( 
      payload
    )
      };

