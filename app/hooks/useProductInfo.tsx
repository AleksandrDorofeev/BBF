import { useEffect, useState } from "react";
import { getSpecificFields } from "../utils/getSpecificFields";

export const useProductInfo = (products: any, id: number) => {
  const [product, setProduct] = useState<any>(null);
  const [image, setImage] = useState<any>();
  const [specificFields, setSpecificFields] = useState<any>(null); 

  useEffect(() => {
    const item = products.filter((item: any) => item.ID_PARTS == id)
    setProduct(item[0])
    setImage(item[0].media[0].IMAGENAME)
    setSpecificFields(getSpecificFields(item[0]))
  }, [id, products])

  return {
    product,
    specificFields, 
    image,
    setImage
  };
}
