import css from './SectionTitle.module.css';

function SectionTitle(props) {
  return (
    <div className={css.wrap}>
      <p className={css.pill}>{props.pill}</p>
      <h2 className='title'>{props.title}</h2>
      <h3 className='subitle'>{props.subtitle}</h3>
    </div>
  );
}
export default SectionTitle;
