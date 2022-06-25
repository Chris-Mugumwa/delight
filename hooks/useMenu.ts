import { useState } from 'react'

// Simply Opening & Closing the Menu in mobile
const useMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const toggleMenu = () => setMenuOpen(!menuOpen)
	return { menuOpen, toggleMenu }
}

export default useMenu
