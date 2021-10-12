import Layout from "../components/Layout";
import Table from '../components/Table';
import Client from "../core/client";

export default function Home() {
  const clients = [
    new Client('Matheus', 24, '1'),
    new Client('Teste', 20, '2'),
    new Client('Jô', 77, '77'),
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
  }

  function deletedClient(client: Client) {
    console.log(`Excluir: ${ client.name }`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table
          clients={ clients }
          selectedClient={ selectedClient }
          deletedClient={ deletedClient }
        ></Table>
      </Layout>
    </div>
  )
}
