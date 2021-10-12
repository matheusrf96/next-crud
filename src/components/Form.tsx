import { useState } from "react";
import Client from "../core/client";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
    client: Client
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
                <Button color="gray" className="mr-2">Cancelar</Button>
                <Button color="purple">{ id ? 'Alterar' : 'Salvar' }</Button>
            </div>
        </div>
    )
}