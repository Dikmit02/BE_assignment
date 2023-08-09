import { Knex } from "knex";
const data=require("../data.json")
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert( 
      data.users.map((user)=>{
        const {charts,productFeatures,password,...rest}=user
        return {
          uuid:uuidv4(),
          password:
          ...rest
        }
      }
      
      )
    )



      
      
      
      };

  async hashPassword(password): Promise<string> {
    const hashkey = await this.config.get('auth.bcryptSalt');
    return await bcrypt.hash(password, hashkey);
  }
      