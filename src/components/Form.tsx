import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    client: Client
    cancelled?: () => void
    onClick?: (client: Client) => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id ?? null

    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            { id ? (
                <Entry text="Código" value={ id } readOnly />
            ) : false}
            <Entry text="Nome" type="text" value={ name } onChange={ setName } />
            <Entry text="Idade" type="number" value={ age } onChange={ setAge } />
            <div className="flex justify-end mt-7">
                <Button color="gray" className="mr-2" onClick={ props.cancelled }>Cancelar</Button>
                <Button color="purple" onClick={() => props.onClick?.(new Client(name, +age, id))}>{ id ? 'Alterar' : 'Salvar' }</Button>
            </div>
        </div>
    )
}