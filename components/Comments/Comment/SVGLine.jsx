export default function SVGline(props){
    return(
        <svg height="2" width={`${props.width}`} className = {props.className}>
            <line x1="0" y1="0" x2={`${props.width}`} y2="0" style = {{stroke: '#CCCCCC', strokeWidth: '2'}}/>
        </svg>
    );
}