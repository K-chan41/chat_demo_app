'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? "ユーザー" : "アシスタント"}
            {message.content}
          </div>
        ))}
        
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}
