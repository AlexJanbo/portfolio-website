"use client"
import React, { useState } from 'react'


const ContactForm = () => {

    const [ name, setName ] = useState<string>('')
    const [ message, setMessage ] = useState<string>('')

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, message})
        })

        if(response.ok) {
          setName('');
          setMessage('');
          alert('Message sent successfully')
        } else {
          alert("Failed to send the message.")
        }
      } catch (error) {
        console.error('Failed to send the message', error)
      }
    }
    
   

    return (
      <div className="flex flex-col w-full max-w-md rounded-lg bg-gray-600 shadow-lg">
        <h2 className="text-xl font-semibold text-center text-white m-2 p-2">Contact Me</h2>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full p-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">Message:</label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                placeholder="Type a message..."
              />
            </div>
            <button type="submit" className="px-4 py-2 gradient_purple-blue hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-gray-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>

    );
}

export default ContactForm