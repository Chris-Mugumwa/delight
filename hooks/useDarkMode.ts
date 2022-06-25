import { useState, useEffect } from 'react'

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

	const toggleDarkMode = (): void => setDarkMode(!darkMode)

	useEffect(() => {
		setDarkMode(document.documentElement.classList.contains('dark'))
	}, [])

	useEffect(() => {
		if (darkMode) {
			window.document.documentElement.classList.add('dark')
			localStorage.setItem('darkMode', 'true')
		} else {
			window.document.documentElement.classList.remove('dark')
			localStorage.setItem('darkMode', 'false')
		}
	}, [darkMode])

	return { darkMode, toggleDarkMode }
}

export default useDarkMode
