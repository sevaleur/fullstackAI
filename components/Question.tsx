'use client'

import Spinner from "./Spinner"

import { askQuestion } from "@/utils/api"
import { useState } from "react"

const Question = () => {
  const [ value, setValue ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ response, setResponse ] = useState("")

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)

    setResponse(answer)
    setValue('')
    setLoading(false)
  }

  return (
    <div className="relative">
      <form onSubmit={ handleSubmit }>
        <input 
          disabled={ loading }
          value={ value } 
          onChange={ onChange } 
          type="text" 
          placeholder="Ask a question"
          className="border border-black/20 px-6 py-2 text-lg rounded-lg mr-4"
        />
        <button 
          disabled={ loading }
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-lg text-lg">
          Ask
        </button>
      </form>
      <div className="absolute left-0 top-0 p-2">
        { loading ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="whitespace-wrap w-[50rem]">
        { response && ( <div> { response } </div> ) }
      </div>
    </div>
  )
}

export default Question