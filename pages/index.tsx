import type { NextPage } from 'next'
import Head from 'next/head'
import axios, { AxiosResponse } from 'axios'
import { Navigation, Hero, About, Values, Twitter, Footer } from '../components'

const Home: NextPage = () => {
	return (
		<div className='relative min-h-[100vh] overflow-x-hidden bg-gray-light dark:bg-blue-dark scroll-smooth'>
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
			<Values />
			<Twitter />
			<Footer />
		</div>
	)
}

export default Home
