import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from '../components/Table';
import Client from "../core/client";

export default function Home() {
  const clients = [
    new Client('Matheus', 24, '1'),
    new Client('Teste', 20, '2'),
    new Client('Jô', 77, '77'),
  ]

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(`Excluir: ${ client.name }`)
  }

  function addClient(client: Client) {
    console.log(client)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        { visible === 'table' ? (
          <>
            <div className="flex justify-end" onClick={() => setVisible('form') }>
              <Button className="mb-4" color="purple">Novo Cliente</Button>
            </div>

            <Table
              clients={ clients }
              selectedClient={ selectedClient }
              deletedClient={ deletedClient }
            ></Table>
          </>
        ) : (
          <Form
            client={ clients[2] }
            onClick={ addClient }
            cancelled={() => setVisible('table')}
          />
        )}

      </Layout>
    </div>
  )
}
