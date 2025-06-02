'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/news')
      .then(res => {
        setArticles(res.data.articles)
        setLoading(false)
      })
  }, [])

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📰 Aaj Ki Khabar - Top Headlines</h1>
      {loading ? <p>Loading news...</p> : (
        <div className="space-y-4">
          {articles.map((item, index) => (
            <div key={index} className="p-4 border rounded-xl shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.source.name} - {new Date(item.publishedAt).toLocaleString()}</p>
              <p>{item.description}</p>
              <a href={item.url} target="_blank" className="text-blue-600 underline">Read more</a>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}