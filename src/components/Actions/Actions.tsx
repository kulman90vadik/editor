import { useEffect, useRef, useState } from 'react'
import { TType } from '../../types/modules'
import styles from './actions.module.scss'
import {Bold,	Eraser,	Italic,	Underline, Quote, Heading } from 'lucide-react'

type Props = {
	applyFormat: (type: TType) => void
	setText: (type: string) => void
}

const headArr = [
	{format: 'h1', title: 'h'},
	{format: 'h2', title: 'h'},
	{format: 'h3', title: 'h'},
];

const Actions = ({ applyFormat, setText }: Props) => {
	// const[colorInput, setColorInput] = useState('#fff');
	const refHeading = useRef<HTMLLIElement>(null);
	const [open, setOpen] = useState(false)
	// const colorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// setColorInput(e.target.value);
	// applyFormat(e.target.value)
	// }
	const changeTitle = (item: string) => {
		applyFormat(item)
		setOpen(false)
	}


	useEffect(() => {
    const clickSortHandler = (event: MouseEvent) => {
      const e = event as MouseEvent;
      if (refHeading.current && !e.composedPath().includes(refHeading.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", clickSortHandler);
    return () => {
      document.body.removeEventListener("click", clickSortHandler);
    };
  }, []);

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

			<li className={`${styles.item} ${styles.itemHeading}`} ref={refHeading}>
				<button className={styles.btn} onClick={() => setOpen(!open)}>
					<Heading />
				</button>
				<ul
					className={styles.listHeading}
					style={{ maxHeight: open ? '500px' : '0px' }}
				>
					{headArr.map((item, index) => {
						return(
						<li key={item.format}>
							<button className={`${styles.btn} ${styles.btnHead}`} onClick={() => changeTitle(item.format)}>
								{item.title} <span>{index + 1}</span>
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
