const NavigationBtn = ({type, className, text}) => {
  return (
    <button
            type={type}
            className={className}
          >
            {text}
          </button>
  )
}

export default NavigationBtn
