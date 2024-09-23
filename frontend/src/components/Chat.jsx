import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = ({ currentUser }) => {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    // Ensure socket connection is initialized and cleaned up correctly
    useEffect(() => {
        const socket = io('http://localhost:8800'); // Use your actual backend URL

        // Listening for incoming messages
        socket.on('receiveMessage', (data) => {
            setMessageList((prev) => [...prev, data]);
        });

        // Cleanup the connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (message !== '') {
            const messageData = {
                sender: currentUser.name,
                message,
                time: new Date(Date.now()).toLocaleTimeString(),
            };

            // Emit message to the server
            socket.emit('sendMessage', messageData);

            // Update message list
            setMessageList((prev) => [...prev, messageData]);

            // Clear the input field
            setMessage('');
        }
    };

    return (
        <div className='flex flex-col h-screen justify-between mx-auto max-w-lg'>
            <div className='flex flex-col h-full p-4 bg-gray-100 rounded-lg shadow-md'>
                <div className='flex-grow overflow-y-scroll p-4 space-y-4'>
                    {messageList.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg ${msg.sender === currentUser.name
                                    ? 'bg-blue-500 text-white self-end'
                                    : 'bg-gray-300 text-black self-start'
                                }`}
                        >
                            <p className='font-semibold'>{msg.sender}</p>
                            <p>{msg.message}</p>
                            <span className='text-xs text-gray-200'>{msg.time}</span>
                        </div>
                    ))}
                </div>

                <div className='flex p-4 bg-white border-t border-gray-300'>
                    <input
                        type='text'
                        placeholder='Type a message...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button
                        onClick={sendMessage}
                        className='ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
