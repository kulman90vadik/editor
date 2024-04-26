import styles from './editor.module.scss'

import parse from 'html-react-parser';
import EmailList from '../EmailList/EmailList'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { postEmail } from '../../services/postEmail'
import { getAllEmails } from '../../services/getAllEmails'
import { useEditor } from '../../useEditor'
import Actions from '../Actions/Actions';


export default function Editor () {

	const {applyFormat, text, setText, updateSelection, refText} = useEditor()

	const queryClient = useQueryClient();

	const {data} = useQuery({
		queryKey: ['email list'],
		queryFn: () =>  getAllEmails()
	})

	const {mutate} = useMutation({ // useMutation - для всего кроме GET!
		mutationKey: ['send email'],
		mutationFn: () => postEmail(text, data?.length),
		onSuccess() { // если всё хорощо прошло то очищаем
			setText('')
			queryClient.refetchQueries({queryKey: ['email list']}) // для автоматического обновления данных.
		}
	})


	return (
		<section className={styles.editor}>
			<div className={styles.inner}>

			{text && 
			<div className={styles.preview}>{parse(text)}</div>
			}

				<Actions applyFormat={applyFormat} setText={setText}/>

				<textarea
					className={styles.text}
					onSelect={updateSelection}
					spellCheck='false'
					ref={refText}
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Enter Email...'
				>
					{text}
				</textarea>
				<button disabled={!text} className={styles.send} type='button' onClick={() => mutate()}>Send</button>
			</div>

			<EmailList />

		</section>
	)
}

