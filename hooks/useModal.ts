import { useState } from 'react'

//Simply Opening & Closing Modals
const useModal = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const toggleModal = () => setModalOpen(!modalOpen)
	return { modalOpen, toggleModal }
}

export default useModal
