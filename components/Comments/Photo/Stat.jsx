import IconButton from '@material-ui/core/IconButton';

export default function Stat(props){
        return(
            <div className = 'SingleStat'>
                    <div onClick = {props.onClick}>
                        <img 
                            name = {props.name} 
                            className = {props.class} 
                            src = {`/static/${props.name}.png`}
                        />
                         <div className = 'StatText'>{props.number}</div>
                    </div>
            </div>
        )   
};