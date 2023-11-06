export default function Todo(Props) {
    return (
        <div ClassName="list-item">
        <input type="checkbox" checked={Props.status} id="input"/>
        <span>{Props.title}</span>
    </div>
    );
}