
import { Knex } from "knex";
const data=require("../data.json")
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert( 
      data.users.map((user)=>({
        password:bcrypt.hash(user?.password, `\$2b\$10\$5yMonn8Zmz6nZhUUbfl17O`),
        displayname:user?.displayname,
        firstname:user?.firstname,
        email:user?.email,
        lastname:user?.email,
        username:user?.username,
        profile:user?.profile,
        organization:user?.organization,
        dob:user?.dob
      })
      )
    )
      };

