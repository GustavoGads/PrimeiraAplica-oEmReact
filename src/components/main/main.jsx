import Cliente from '../cliente/cliente.jsx';
import './main.css'

function Main() {
    return <main>
                <h1>Clientes</h1>
        <Cliente nome="Loja ABC"
                 cidade="São Paulo"
                 uf="SP"
                 amei="Curti"/>
        <Cliente nome="Loja Brasil"
                 cidade="Curitiba"
                 uf="PR"
                 amei="Não Curti"/>
    </main>
}

export default Main;