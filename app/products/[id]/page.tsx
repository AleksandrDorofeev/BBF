'use client';

import Container from '@/app/components/Container';

import { useCallback, useState } from 'react';
import { useProductInfo } from '../../hooks/useProductInfo';
import { jsonData } from '../../json/data';

const Product =  (props: any) => {
  const { product, specificFields, image, setImage } = useProductInfo(jsonData, props.params.id);
  const [lang, setLang] = useState<string>('german');

  const changeLang = useCallback((item: string) => {
    setLang(item)
  }, [])

  return product && (
    <Container>
      <div className="flex flex-col justify-between lg:flex-row gap-16">
        <div className='flex flex-col gap-6 mx-auto max-w-[750px] md:w-full'>
          <img 
            src={`https://media.bbf-bike.de/shop/images/${image}.jpg`} 
            alt="Image" 
            className='w-full object-contain rounded-lg lg:max-w-[750px] lg:min-w-[600px]  md:h-[750px]' />
          <div className='flex flex-row justify-between items-center gap-3'>
          {product.media.length > 1 && product.media.map((item: any, i: number) => {
              return (
                <div 
                  key={i}
                  onClick={() => setImage(item.IMAGENAME)}
                  className='
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    min-h-[120px] 
                    w-[100%] 
                    h-[100%] 
                    border-[1px] 
                    cursor-pointer
                    shadow-sm
                    hover:shadow-md
                    transition'>
                <div 
                  className='md:w-24 mx-auto'>
                  <img  
                    src={`https://media.bbf-bike.de/shop/images/${item.IMAGENAME}.jpg`} 
                    alt="Image" 
                    className=' rounded-md min-w-[85px] max-w-[85px]' />
                </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <span>{specificFields.marke}</span>
            <h1 className='text-3xl font-bold'>{specificFields.Modellname}</h1>
          </div>
          <h6 className='text-2xl font-semibold'>&euro; {specificFields.resellPrice}</h6>

          <div>
            <span className='text-2xl font-semibold'>Description</span>
            <div className='flex flex-row items-center flex-wrap'>
              {specificFields.languages.map((item: any, i: number) => {
                return (
                  <button 
                    key={i}
                    onClick={() => changeLang(item)} 
                    className='
                      min-w-[95px] 
                      bg-gray-200 
                      py-2 
                      px-5 
                      rounded-lg 
                      text-gray-800 
                      text-md 
                      mr-2 
                      mb-2
                      shadow-sm
                      hover:shadow-md
                      transition'>
                    {item}
                  </button>
                )
              })}
            </div>
            <p className='text-gray-700 whitespace-pre-wrap'>
              {product.translations.descriptions[lang][0].TEXT2}
            </p>
          </div>
          <div>
            <span className='text-2xl font-semibold'>Properties</span>
            {product.properties.primary.map((item: any, i: number) => {
              return <div key={i}><span className='font-semibold'>{item.ATTRIBUTE}:</span> {item.VALUE}</div>
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Product;