import { useNavigate } from 'react-router-dom'

import Button from '~/components/ui/button/Button'

import Layout from '~/components/layout/Layout'
import Statistics from '../profile/statistics/Statistics'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.png'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
