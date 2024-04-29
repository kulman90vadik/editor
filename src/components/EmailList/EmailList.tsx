import { useQuery } from '@tanstack/react-query';
import styles from './emaillist.module.scss'
import { getAllEmails } from '../../../public/services/getAllEmails';
import { AtSign } from 'lucide-react';
import parse from 'html-react-parser';

const EmailList = () => {

  const {data, isPending} = useQuery({
		queryKey: ['email list'],
		queryFn: () =>  getAllEmails()
	})


  return (
    <div className={styles.emails}>

    <ul className={styles.list}>

      {isPending && <h1>...Loading</h1>}

      {data?.map(email => {
        return(
          <li className={styles.item} key={email.id}>
            <AtSign />
            <p>{parse(email.text)}</p>
            </li>
        )
      })}
    </ul>

    </div>
  );
}
 
export default EmailList;