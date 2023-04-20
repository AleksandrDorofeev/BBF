export const getSpecificFields = (object: any) => {
  return Object.entries(object).reduce((acc, [key, value]: any) => {

    if (key === 'RESELLERPRICE' ) return { ...acc, resellPrice: value }

    if (key === 'properties') {
      const props = value.primary.reduce((acc2: any, item2: any) => {
        if(item2.ATTRIBUTE === 'Marke') return { ...acc2, marke: item2.VALUE }

        if(item2.ATTRIBUTE === 'Modellname') return { ...acc2, Modellname: item2.VALUE }

        return acc2
      }, {})
      
      return { ...acc, ...props }
    }

    if (key == 'translations') {
      const translations = Object.entries(value.descriptions).reduce((acc3: any, [key, value]: any) => {
        if (value.length) return [...acc3, key];
        return acc3;
      }, [])
      return { ...acc, languages: translations }
    }

    return acc
  }, {})
}
