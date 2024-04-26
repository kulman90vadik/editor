import { FC } from 'react'
import { TType } from '../../types/modules'
import styles from './actions.module.scss'
import { Bold, Eraser, Italic, Underline } from 'lucide-react'

type Props = {
	applyFormat: (type: TType) => void
	setText: (type: string) => void
}

const Actions: FC<Props> = ({ applyFormat, setText }) => {
	return (
		<ul className={styles.actions}>
		
					<li className={styles.item}>
						<button className={styles.btn} onClick={() => applyFormat('bold')}>
							<Bold />
						</button>
					</li>
					<li className={styles.item}>
						<button className={styles.btn} onClick={() => applyFormat('italic')}>
							<Italic />
						</button>
					</li>
					<li className={styles.item}>
						<button className={styles.btn} onClick={() => applyFormat('underline')}>
							<Underline />
						</button>
					</li>
		
					<li className={styles.item}>
						<button className={styles.btn} onClick={() => setText('')}>
							<Eraser />
						</button>
					</li>

		</ul>
	)
}

export default Actions


