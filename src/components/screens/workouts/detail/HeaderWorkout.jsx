import clsx from 'clsx'

import stylesLayout from '~/components/layout/Layout.module.scss'
import Header from '~/components/layout/header/Header'

import styles from './Workout.module.scss'

const HeaderWorkout = ({ workoutLog, isSuccess }) => {
	return (
		<div
			className={clsx(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/workout-bg.jpg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkout
