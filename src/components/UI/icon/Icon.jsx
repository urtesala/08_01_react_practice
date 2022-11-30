import css from './Icon.module.css';

function Icon(props) {
  let iconClassStr = 'fa fa-';
  iconClassStr += props.children;
  iconClassStr += ' ' + css.icon;

  // patikrinima ar komponentas gavo klase tarp pradzios ir pabaigos tagu
  if (!props.children) {
    return <i className='fa fa-times-circle fa-3x' aria-hidden='true'></i>;
  }

  return <i className={iconClassStr} aria-hidden='true'></i>;
}
export default Icon;
