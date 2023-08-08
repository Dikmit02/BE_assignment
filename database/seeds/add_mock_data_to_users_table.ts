import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert( [
        {
          "email": "rtripati@example.com",
          "displayname": "Raj",
          "firstname": "Rajesh",
          "lastname": "Tripati",
          "username": "rtripati",
          "profile": "https://i.imgur.com/Tmbyeib.jpeg",
          "organization": "ABC",
          "dob": "5-10-1985",
          "password": "",
          "charts": ["ch_01", "ch_02"],
          "productFeatures": ["B001F001", "B001F002", "B002F001", "B002F002", "B003F001", "B003F002", "B004F001", "B004F002", "B005F001", "B005F002"]
        },
        {
          "email": "mraj@example.com",
          "displayname": "Mohan",
          "firstname": "Mohan",
          "lastname": "Raj",
          "profile": "https://i.imgur.com/XUbwQ5E.jpeg",
          "username": "mraj",
          "organization": "DEF",
          "dob": "5-10-1987",
          "password": "",
          "charts": ["ch_01"],
          "productFeatures": ["B001F001", "B001F002"]
        },
        {
          "email": "ssharma@example.com",
          "displayname": "Shree",
          "firstname": "Shreya",
          "lastname": "Sharma",
          "profile": "https://i.imgur.com/viQL2BT.png",
          "username": "ssharma",
          "organization": "GHI",
          "dob": "5-10-1988",
          "password": "",
          "charts": ["ch_01", "ch_02"],
          "productFeatures": ["B001F001", "B001F002", "B001F003", "B001F004", "B001F005"]
        },
        {
          "email": "rmathur@example.com",
          "displayname": "Rohan",
          "firstname": "Rohan",
          "lastname": "Mathur",
          "profile": "https://i.imgur.com/4v2XyY2.jpeg",
          "username": "rmathur",
          "organization": "JKL",
          "dob": "5-10-1989",
          "password": "",
          "charts": ["ch_02"],
          "productFeatures": ["B002F001", "B002F002"]
        },
        {
          "email": "asingh@example.com",
          "displayname": "Anup",
          "firstname": "Anup",
          "lastname": "Singh",
          "profile": "https://i.imgur.com/EFeEbuJ.jpeg",
          "username": "asingh",
          "organization": "MNO",
          "dob": "5-10-1992",
          "password": "",
          "charts": ["ch_01", "ch_02"],
          "productFeatures": ["B004F001", "B004F002", "B004F003", "B004F004", "B005F005"]
        }
      ]);
};
