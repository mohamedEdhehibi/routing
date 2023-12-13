import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const About = () => {
    const location = useLocation()
    useEffect(() => {
        console.log("🚀 ~ file: About.js ~ line 5 ~ About ~ history", location)

    }, [])
    return (
        <div>
            <h1>
                About Page
            </h1>
        </div>
    )
}

export default About