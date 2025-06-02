import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
  const res = await fetch(url)
  const data = await res.json()
  return NextResponse.json(data)
}