import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

async function connectToDatabase(uri: string) {
    const client =  new MongoClient(uri)

    await client.connect()
    return client
}

export default async function handler(req: NextApiRequest,res: NextApiResponse,) {

    if(req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    const { name, message } = req.body
    console.log(name)

    const client = await connectToDatabase(process.env.MONGODB_URI!)
    const db = client.db()

    try {
        const collection = db.collection('contacts')
        await collection.insertOne({ name, message, createdAt: new Date()})
        client.close()
        res.status(200).json({ message: 'Message sent successfully'})
    } catch (error) {
        client.close()
        console.error('Failed to save the message:', error)
        res.status(500).json({ error: 'Failed to save the message'})
    }
}