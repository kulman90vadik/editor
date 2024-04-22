import { useRef, useState } from 'react'
import styles from './editor.module.scss'
import { Bold, Italic, Eraser, Underline } from 'lucide-react'
import { styleApply } from '../../styleApply'
import { TType } from '../../types/modules'
import parse from 'html-react-parser';

const Editor = () => {
	const [text, setText] = useState(
		`Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quo voluptatum unde aliquid sapiente consequuntur adipisci inventore fugit. Ab, tempora aliquam voluptas, recusandae sint nostrum assumenda rem amet molestiae eligendi asperiores iusto minus perferendis aliquid. Consequatur aut repellendus itaque perferendis corporis dolore amet distinctio error nobis ipsum, fugit explicabo quidem vel atque animi!`
	)
	const refText = useRef<HTMLTextAreaElement | null>(null);
	const[selectionStart, setselectionStart] = useState(0);
	const[selectionEnd, setselectionEnd] = useState(0);

	const updateSelection = () => {
		if (!refText.current) return
		setselectionStart(refText.current.selectionStart)
		setselectionEnd(refText.current.selectionEnd)
	}

	const applyFormat = (type: TType) => {
		const selectedText = text.substring(selectionStart, selectionEnd) // выделенный текст
    if (!selectedText) return
		const before = text.substring(0, selectionStart) // текст до выделенного текста
		const after = text.substring(selectionEnd) // текст после выделенного текста
		setText(before + styleApply(type, selectedText) + after)
	}

	return (
		<section className={styles.editor}>

			<div className={styles.preview}>{parse(text)}</div>

			<ul className={styles.top}>
				<li className={styles.item}>
					<button className={styles.btn} onClick={() => applyFormat('bold')}>
						<Bold />
					</button>
				</li>
				<li className={styles.item}>
					<button className={styles.btn}  onClick={() => applyFormat('italic')}>
						<Italic />
					</button>
				</li>
				<li className={styles.item}>
					<button className={styles.btn} onClick={() => setText('')}>
						<Eraser />
					</button>
				</li>
				<li className={styles.item}>
					<button className={styles.btn}  onClick={() => applyFormat('underline')}>
						<Underline />
					</button>
				</li>
			</ul>

			<textarea
				className={styles.text}
				onSelect={updateSelection}
        spellCheck='false'
				ref={refText}
				value={text}
        onChange={(e) => setText(e.target.value)}
			>
				{parse(text)}
			</textarea>
		</section>
	)
}

export default Editor
