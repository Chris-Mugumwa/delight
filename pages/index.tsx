import type {
	GetServerSideProps,
	NextPage,
	InferGetServerSidePropsType,
} from 'next'
import Head from 'next/head'
import { Navigation, Hero, About, Values, Twitter, Footer } from '../components'

type Data = {
	data: {
		data: {
			data: {
				id: string
				title: string
			}[]
		}
	}
}

const Home = ({ data }: Data) => {
	return (
		<div className='relative min-h-[100vh] overflow-x-hidden bg-gray-light dark:bg-blue-dark scroll-smooth'>
			<Head>
				<title>Delight</title>
				<meta
					name='Home'
					content='Organic Frozen Custard coming soon to Mzanzi'
				/>
				<link rel='icon' href='/Delight.svg' />
			</Head>

			<Navigation />
			<Hero />
			<About />
			<Values />
			<Twitter data={data} />
			<Footer />
		</div>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch(`https://delight-be.vercel.app/`)
	const data: Response = await response.json()

	console.log(data)

	return {
		props: {
			data,
		},
	}
}
