'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24">
      <h1 class="text-2xl font-bold text-fuchsia-500">パワハラ上司シミュレーション</h1>
      <div className="bg-white rounded-lg shadow-xl p-6">
        {messages.map((m, index) => (
            <div
              key={index}
              className={`mb-4 p-2 ${
                m.role === 'user' ? 'text-blue-600' : 'text-green-600'
              }`}
            >
              {m.role === 'user' ? 'あなた: ' : 'AI上司: '}
              {m.content}
            </div>
          ))}

        <form onSubmit={handleSubmit}>
          <label>
            なんだ? 言いたいことがあるなら言ってみろよ! ...
            <input
              className="w-full border border-gray-300 rounded mb-2 p-2"
              value={input}
              onChange={handleInputChange}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            えいやっ!
          </button>
        </form>
      </div>
    </div>
  );
}