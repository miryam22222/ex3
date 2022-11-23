import Laureate from "./laureate";

export default function LaureateList({ laureates }) {
    return (
        <div className="row">
            {laureates.map(laureate => {
                return <Laureate key={laureate.id} laureate={laureate} />
            })}
        </div>
    )
}