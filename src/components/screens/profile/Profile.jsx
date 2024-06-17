import clsx from 'clsx'

import Loader from '~/components/ui/Loader'

import stylesLayout from '~/components/layout/Layout.module.scss'
import Header from '~/components/layout/header/Header'

import styles from './Profile.module.scss'
import Statistics from './statistics/Statistics'
import { useProfile } from './useProfile'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={clsx(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img src='/images/header/user.svg' alt='Profile' height='56' draggable={false} />
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div className={`wrapper-inner-page ${styles['wrapper-inner-page-bottom']}`}>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>{index === 1 ? 'After' : 'Before'}</div>
							<img src={image} alt='' draggable={false} className={styles['profile-image']} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Profile
