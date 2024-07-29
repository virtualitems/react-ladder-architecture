import './styles.css';


/**
 * @description 
 * @param {import('react').HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function NavMenuItem(props) {
  return (
    <a className="navmenuitem" href={props.href}>{props.children}</a>
  );
}
