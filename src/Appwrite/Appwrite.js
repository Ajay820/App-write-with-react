import {Client,Account,Databases}  from "appwrite"

const client = new Client()

client.setEndpoint("http://localhost:81/v1").setProject("642537661e1c84620cc5")

export const account = new Account(client)

export const databases = new Databases(client,"64267811418b6d824c6c")


