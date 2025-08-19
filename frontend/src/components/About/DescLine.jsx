export default function DescLine ({children}) {
    return (
        <div className="flex my-2 lg:my-4">
            <div>🌱&nbsp;</div>
            <p className="flex flex-wrap">{children}</p>
        </div>
    )
}