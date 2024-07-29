import './styles.css';


/**
 * @description 
 * @param {import('react').HTMLProps<HTMLElement>} props
 * @returns {React.ReactElement}
 */
export default function PageLayout(props) {
  return (
    <div className="pagelayout">
      <div className="north">{props.north}</div>
      <div className="west">{props.west}</div>
      <div className="center">{props.center}</div>
      <div className="south">{props.south}</div>
    </div>
  )
}
