import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className={styles['input-wrapper']}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className='error'>{error}</div>}
		</div>
	)
}

export default Field
