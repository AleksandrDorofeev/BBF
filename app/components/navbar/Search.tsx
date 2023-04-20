'use client';

import { useRouter } from "next/navigation";
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  const router = useRouter();

  return (
    <div className="
      border-[1px]
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
      sm:block
      hidden
    ">
      <div className="
        flex
        flex-row
        items-center
        justify-between
      ">
        <div
          onClick={() => router.push('/')}
        className="
          text-sm
          font-semibold
          px-6
          border-r-[1px]
        ">
          Home
        </div>
        <div
          onClick={() => router.push('/products')}
          className="
          text-sm
          pl-6
          pr-2
          text-gray-600
          flex
          flex-row
          items-center
          gap-3
        ">
          <div className="hidden sm:block">Products</div>
          <div className="
            p-2
            bg-gray-500
            rounded-full
            text-white
          ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;