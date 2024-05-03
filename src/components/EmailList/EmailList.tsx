import styles from './emaillist.module.scss'
import { AtSign } from 'lucide-react';
import parse from 'html-react-parser';

type Props = {
  emailListArr: string[]
}

const EmailList = ({emailListArr}: Props) => {

  // const {data, isPending} = useQuery({
	// 	queryKey: ['email list'],
	// 	queryFn: () =>  getAllEmails()
	// })

  return (
    <div className={styles.emails}>

    <ul className={styles.list}>

      {/* {isPending && <h1>...Loading</h1>} */}

      {emailListArr?.map(email => {
        return(
          <li className={styles.item} key={email}>
            <AtSign />
            <p>{parse(email)}</p>
          </li>
        )
      })}
    </ul>

    </div>
  );
}
 
export default EmailList;