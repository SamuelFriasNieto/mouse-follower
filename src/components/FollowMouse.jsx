import { useEffect, useState } from "react"

export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
      console.log("hola")
      const handleMove = (event) => {
        const {clientX, clientY} = event
        console.log('handleMove', {clientX, clientY})
        setPosition({x: clientX, y: clientY})
      }
      if(enabled) {
        window.addEventListener('pointermove', handleMove)
      }
  
      return () => {
        window.removeEventListener('pointermove', handleMove)
        setPosition({x: 0, y: 0})
      }
  
    }, [enabled])
    return (
        <>
            <div style={{
                position:"absolute",
                backgroundColor: "#09f",
                borderRadius: "50%",
                boxShadow: `0 0 50px 50px #09f `,
                opacity: 0.2,
                pointerEvents: "none",
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px,${position.y}px)`
            }}/>
            <button onClick={() => {setEnabled(!enabled)}}>
                {enabled ? "Desactivar" : "Activar"} Puntero
            </button>
          </>

    )
}