import Loader from '~/components/ui/Loader'
import Alert from '~/components/ui/alert/Alert'

import Layout from '~/components/layout/Layout'
import styles from '../detail/Workout.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

const ListWorkouts = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } = useWorkouts()

	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg' heading='Workout list' />

			<div className={`wrapper-inner-page ${styles['wrapper-inner-page-bottom']}`}>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map((workout) => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && <Alert type='warning' text='Workouts not found' />}
			</div>
		</>
	)
}

export default ListWorkouts
