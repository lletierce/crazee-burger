import { useState } from "react"

export const useSuccessMessage = (timeDelay = 2000) => {
  // state
  const [isSubmitted, setIsSubmitted] = useState(false)

  // comportements
  const displaySuccessMessage = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, timeDelay)
  }

  return { isSubmitted, displaySuccessMessage }
}
