'use client';

import { AiOutlineMenu }  from 'react-icons/ai';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';

const BurgerMenu = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, [])

  return (
    <div className="relative hidden max-sm:block">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
        ">
          <AiOutlineMenu />
        </div>
      </div>
      {isOpen && (
        <div className='
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
        '>
          <div className='flex flex-col cursor-pointer'>
            <>
              <MenuItem
                onClick={() => router.push('/')}
                label='Home'
              />
               <MenuItem
                onClick={() => router.push('/products')}
                label='Products'
              />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default BurgerMenu;