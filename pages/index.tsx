import type { NextPage } from 'next'
import Head from 'next/head'
import { Navigation, Hero, About } from '../components'

const Home: NextPage = () => {
	return (
		<div className='relative min-h-[100vh] overflow-x-hidden bg-gray-light dark:bg-blue-dark'>
			<Head>
				<title>Delight</title>
				<meta
					name='Home'
					content='Organic Frozen Custard coming soon to Mzanzi'
				/>
				<link rel='icon' href='/Logo.svg' />
			</Head>

			<Navigation />
			<Hero />
			<About />
		</div>
	)
}

export default Home
