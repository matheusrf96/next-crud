interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            px-4 py-2 rounded-md
            bg-gradient-to-r from-${ props.color }-400 to-${ props.color }-700
            text-white
            ${ props.className }
        `}>
            { props.children }
        </button>
    )
}