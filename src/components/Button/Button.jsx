import React from 'react'

const Button = (props) => {
  // console.log(props)

  // const title = props.title -> We can use either this or below which is called destructuring
  // const color = props.color
  const {title, color, subTitle} = props

  return (
    <div style={{border:"1px solid yellow"}}>

      <button style={{height:"50px", width:"100px", background:color}}>{ title } + 1</button>
      <p style={{color:"white"}}>{subTitle}</p>

    </div>
  )
}

export default Button