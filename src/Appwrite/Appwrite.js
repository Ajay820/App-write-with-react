import {Client,Account,Databases}  from "appwrite"

const client = new Client()

client.setEndpoint("http://localhost:81/v1").setProject("6427c6b4c22de4ed49a7")

export const account = new Account(client)

export const databases = new Databases(client,"6427c6d20464df58bf36")


