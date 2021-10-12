interface EntryProps {
    text: string
    value: any
    type?: "text" | "number"
    readOnly?: boolean
    onChange?: (value: any) => void
}

export default function Entry(props: EntryProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2">{ props.text }</label>
            <input
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50 px-4 py-2
                    ${ props.readOnly ? '' : 'focus:bg-white' }
                `}
                type={ props.type  ?? "text"}
                value={ props.value }
                readOnly={ props.readOnly }
                onChange={(e) => props.onChange?.(e.target.value)}
            />
        </div>
    )
}