import { useState } from 'react'
import Image from 'next/image'
import { Chevron } from '../../utils'
import { motion } from 'framer-motion'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

type Custard = {
	id: number
	name: string
	alt: string
	description: string
	url: string
	color: string
}[]

const custardData = [
	{
		id: 1,
		name: 'Chocolate',
		alt: 'Chocolate flavoured frozen custard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit donec semper vulputate non neque nec, facilisis amet.',
		url: '/images/Chocolate.png',
		color: '#FB8500',
	},
	{
		id: 2,
		name: 'Raspberry',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit donec semper vulputate non neque nec, facilisis amet.',
		alt: 'Raspberry flavoured frozen custard',
		url: '/images/Raspberry.png',
		color: '#219EBC',
	},
	{
		id: 3,
		name: 'Caramel',
		alt: 'Caramel Flavoured frozen custard',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit donec semper vulputate non neque nec, facilisis amet.',
		url: '/images/Caramel.png',
		color: '#d90429',
	},
]

const Carousel = () => {
	const [activeItem, setActiveItem] = useState(1)
	const [color, setColor] = useState(1)

	const nextSlide = (): void => {
		activeItem !== custardData.length
			? setActiveItem(prev => prev + 1)
			: setActiveItem(1)
	}

	const prevSlide = (): void => {
		activeItem !== 1
			? setActiveItem(prev => prev - 1)
			: setActiveItem(custardData.length)
	}

	const moveDot = (index: number): void => setActiveItem(index)

	return (
		<main className='flex flex-col items-center justify-center w-full lg:w-1/2'>
			<div className='flex items-center justify-center w-full'>
				<Chevron moveSlide={prevSlide}>
					<IoChevronBackOutline className='w-6 h-6' />
				</Chevron>
				<div className='flex items-center justify-center w-full'>
					{custardData.map((custard, index) => (
						<motion.div
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={custard.id}
							className={
								activeItem === index + 1 ? 'card' : 'card-hidden'
							}>
							<Image
								src={`${custard.url}`}
								width='460'
								height='512'
								className='relative z-40 lg:scale-150'
							/>
							<motion.div
								initial={{ opacity: 1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								style={{ backgroundColor: `${custard.color}` }}
								className={
									activeItem === index + 1 ? 'circle' : 'circle'
								}
							/>

							<div />
						</motion.div>
					))}
				</div>
				<Chevron moveSlide={nextSlide}>
					<IoChevronForwardOutline className='w-6 h-6' />
				</Chevron>
			</div>
			<div className='flex gap-3 '>
				{Array.from({ length: 3 }).map((item: unknown, index: number) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={
							activeItem === index + 1
								? 'pointer ring-blue-normal '
								: 'pointer bg-yellow-dark ring-transparent'
						}
					/>
				))}
			</div>
		</main>
	)
}

export default Carousel
