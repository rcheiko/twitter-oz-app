import React from "react"

interface IShimmerArray {
  count?: number
  children: React.ReactNode
}

const ShimmerArray = (({ count=1, children }: IShimmerArray) => {
  return (
    Array.from({length: count}).map((_, index) => (
      <React.Fragment key={index}>
        {children}
      </React.Fragment>
    ))
  )
})

export default ShimmerArray