import { useState } from 'react'
import { TType } from '../../types/modules'
import styles from './actions.module.scss'
import {
	Bold,
	Eraser,
	Italic,
	Underline,
	Quote,
	Heading,
	Heading3,
	Heading2,
	Heading1
} from 'lucide-react'

type Props = {
	applyFormat: (type: TType) => void
	setText: (type: string) => void
}

const headArr = ['h1', 'h2', 'h3'];

const Actions = ({ applyFormat, setText }: Props) => {
	// const[colorInput, setColorInput] = useState('#fff');
	const [open, setOpen] = useState(false)
	// const colorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// setColorInput(e.target.value);
	// applyFormat(e.target.value)
	// }
	const changeTitle = (item: string) => {
		applyFormat(item)
		setOpen(false)
	}

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

			{/* 
					<li className={styles.item}>
						<button className={`${styles.btn} ${styles.btnColor}`} onClick={() => console.log('click')}>
						 <Baseline />
						  <input type="color" name="color" value={colorInput} className={styles.inputColor}
							onChange={(e) => colorChange(e)} /> 
	
						</button>
					</li> */}

			<li className={styles.item}>
				<button className={styles.btn} onClick={() => applyFormat('quote')}>
					<Quote />
				</button>
			</li>

			<li className={`${styles.item} ${styles.itemHeading}`}>
				<button className={styles.btn} onClick={() => setOpen(!open)}>
					<Heading />
				</button>
				<ul
					className={styles.listHeading}
					style={{ maxHeight: open ? '500px' : '0px' }}
				>
					{headArr.map(item => {
						return(
						<li key={item}>
							<button className={styles.btn} onClick={() => changeTitle(item)}>
								{item}
							</button>
						</li>
						)
					})}
				</ul>
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
