import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='flex overflow-hidden ml-4 gap-x-2 border-[1px] border-[#3352cc] rounded-full px-4 py-1 items-center flex-1'>
      <SearchIcon color='#3352cc' />
      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none ring-0 focus:ring-0 flex-1"
        />
    </div>
  )
}

export default Search
