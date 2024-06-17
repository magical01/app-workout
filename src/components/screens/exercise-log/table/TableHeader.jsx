import styles from '../ExerciseLog.module.scss'

const TableHeader = () => {
	const data = ['Previous', 'Weight & Repeat', 'Completed']

	return (
		<div className={styles.row}>
			{data.map((item, index) => (
				<div key={index}>
					<span>{item}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
