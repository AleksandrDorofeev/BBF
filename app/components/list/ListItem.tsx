'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { getSpecificFields } from "@/app/utils/getSpecificFields";
import { memo } from 'react';

const Product = (props: any) => {
  const router = useRouter();

  const fields: any = getSpecificFields(props);

  return(
    <div className="
      border-[1px]
      py-2
      px-2
      rounded-md
      cursor-pointer
      shadow-sm
      hover:shadow-md
      transition
    ">
      <div onClick={() => router.push(`/products/${props.ID_PARTS}`)}>
        <Image
          src={`https://media.bbf-bike.de/shop/images/${props.media[0].IMAGENAME}.jpg`}
          alt='img'
          width='80'
          height='80'
          className="
            object-cover
            w-full
          " />
        <div className="px-4 pt-3">
          <span className="text-gray-400 text-sm">{fields.marke}</span>
        <p className="text-lg font-bold block truncate capitalize">{fields.Modellname}</p>
          <div className="flex items-center">
            <p className=" text-lg font-semibold my-3">&euro; {fields.resellPrice}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Product);