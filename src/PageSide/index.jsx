import './styles.css';
import NavMenu from '../NavMenu';
import NavMenuItem from '../NavMenuItem';


/**
 * @description 
 * @param {import('react').HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function PageSide(props) {

  const links = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <div className="pageside">
      <NavMenu
        items={
          links.map(item => (
            <NavMenuItem key={item.href} href={item.href}>
              {item.text}
            </NavMenuItem>
          ))
        }
      />
    </div>
  );
}
