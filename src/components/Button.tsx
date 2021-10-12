interface ButtonProps {
    color?: 'green' | 'blue' | 'gray' | 'purple'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={ props.onClick } className={`
            px-4 py-2 rounded-md
            bg-gradient-to-r from-${ props.color }-500 to-${ props.color }-800
            text-white
            ${ props.className }
        `}>
            { props.children }
        </button>
    )
}