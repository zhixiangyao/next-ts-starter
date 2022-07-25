import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../hooks'
import { decrement, increment, incrementByAmount, selectCount } from '../slices/counterSlice'

const Home: NextPage = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [num, setNum] = useState('')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">count: {count}</h1>

        <div className="flex justify-between align-middle m-2">
          <button
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
          &nbsp;
          <button
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
        </div>

        <div className="flex justify-between align-middle m-2">
          <input
            className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="number"
            value={num}
            onChange={e => setNum(e.target.value)}
          />
          &nbsp;
          <button
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={() => dispatch(incrementByAmount(Number(num || 0)))}
          >
            add
          </button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
