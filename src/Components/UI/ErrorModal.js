import Button from './Button';
import Card from './Card';
import style from './ErrorModal.module.css';

export default function ErrorModal(props) {
  return (
    <div className={style.container}>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.footer}>
          <Button onClick={props.modalHandler}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
}
