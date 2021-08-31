import './style.css'
function CardPersonal({name}){
    return(
        <div className="card">
            <span>Olá eu sou o {name} e estudo programação</span>
        </div>
    )
}
export default CardPersonal;