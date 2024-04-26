import { FC } from 'react'
import { TType } from '../../types/modules'
import { Icon } from '../Icon/Icon'
import { dataIcon } from '../Icon/dataIcons'
import styles from './actions.module.scss'

type Props = {
	applyFormat: (type: TType) => void
	setText: (type: string) => void
}

const Actions: FC<Props> = ({ applyFormat, setText }) => {
	return (
		<ul className={styles.actions}>
			{dataIcon.map(icon => {
				return (
					<li className={styles.item} key={icon}>
						<button className={styles.btn} onClick={() => applyFormat(icon)}>
							<Icon id={icon} />
						</button>
					</li>
				)
			})}
      
					<li className={styles.item}>
						<button className={styles.btn} onClick={() => setText('')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
						</button>
					</li>

		</ul>
	)
}

export default Actions


