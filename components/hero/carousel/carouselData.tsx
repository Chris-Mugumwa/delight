type Custard = {
	id: number
	name: string
	alt: string
	description: string
	url: string
	color: string
}[]

const custardData: Custard = [
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

export default custardData
