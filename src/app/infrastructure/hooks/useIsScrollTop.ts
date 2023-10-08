import { useEffect, useState } from "react"


function useIsScrollTop (object : { elementById : string, positonIdentity ?: number }) {

  const { elementById, positonIdentity } = object
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    const $elementScroll = document.getElementById(`${elementById}`)
    const initialOffsetTop = $elementScroll?.getBoundingClientRect().top ?? 0

    const handleScroll = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop
      if(positonIdentity){
        if (scrollTop >= initialOffsetTop && scrollTop >= positonIdentity ) { setScrollTop(true) } else { setScrollTop(false) }
      } else {
        if (scrollTop >= initialOffsetTop) { setScrollTop(true) } else { setScrollTop(false) }
      }

    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [elementById, positonIdentity])

  return { scrollTop }
}

export default useIsScrollTop
