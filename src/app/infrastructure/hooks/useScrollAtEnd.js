import { useState, useEffect } from 'react'

export function useScrollAtEnd () {
  const [isEndSroll, setIsEndSroll] = useState(false)

  useEffect(() => {
    const isScrollAtEnd = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      // Get the total height of the page
      const totalHeight = document.documentElement.scrollHeight

      // Get the height of the viewport
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      // Check if the scroll position is near the end of the page
      // You can adjust the threshold as needed
      const scrollEndThreshold = 100 // Adjust this value as needed
      return totalHeight - scrollPosition <= windowHeight + scrollEndThreshold
    }

    const handleScroll = () => {
      setIsEndSroll(isScrollAtEnd())
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isEndSroll }
}
