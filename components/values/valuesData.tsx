import { Honesty, Transparency, EcoFriendly } from '../icons'

type Values = {
	name: string
	description: string
	icon: JSX.Element
}[]

const valueData: Values = [
	{
		name: 'Honesty',
		description:
			'We value honesty above all, who we are, our mission, our objectives ... that is all on the table.',
		icon: <Honesty />,
	},
	{
		name: 'Transparency',
		description:
			'We believe in being fully transparent, whether it be our recipes, ingredients and production method, we want you to be as involved as we are.',
		icon: <Transparency />,
	},
	{
		name: 'Eco-Friendly',
		description:
			'We have ensured that all our ingredients are environmentally friendly. We are not only provide you with some killer frozen custard, but do our part in saving mother nature.',
		icon: <EcoFriendly />,
	},
]

export default valueData
