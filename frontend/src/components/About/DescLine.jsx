export default function DescLine ({children}) {
    return (
        <div className="flex my-4">
            <div>🌱&nbsp;</div>
            <div className="flex flex-wrap whitespace-pre-wrap">{children}</div>
        </div>
    )
}