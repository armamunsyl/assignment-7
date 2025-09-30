import React, {use} from 'react'

const SupportCard = ({UserProm}) => {
    const userData= use(UserProm)
    console.log(userData)
  return (
    <div>SupportCard</div>
  )
}

export default SupportCard