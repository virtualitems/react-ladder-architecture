import './styles.css';


/**
 * @description 
 * @param {import('react').HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function NavMenu(props) {
  return (
    <div className="navmenu">
      <ul>
        {props.items.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  );
}
