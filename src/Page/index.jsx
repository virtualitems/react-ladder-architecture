import './styles.css';
import PageLayout from '../PageLayout';
import PageSide from '../PageSide';


/**
 * @description 
 * @param {import('react').HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function Page(props) {
  return (
    <div className="page">
      <PageLayout
        north={'PageTop'}
        west={<PageSide />}
        center={'PageContent'}
        south={'PageBottom'}
      />
    </div>
  )
}
