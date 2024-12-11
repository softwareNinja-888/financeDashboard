export function Item(props){
    return (
        <div className={`${props.space} border border-red-500 min-w-10 min-h-64 rounded-3xl `}>
            {props.child ? <props.child/>: null}
        </div>
    )
}