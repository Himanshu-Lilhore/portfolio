const Highlighter = ({ bgColor = "bg-yellow-300", children, className = "" }) => {
    return (
        <span className={`relative inline-block mx-1 ${className}`}>
            {/* text */}
            <span className="relative z-30 px-1">{children}</span>

            {/* highlighter */}
            <span
                aria-hidden="true"
                className={`${bgColor} z-20 pointer-events-none absolute -left-1 -right-1 top-1/2 -translate-y-1/2 rounded-md blur-sm opacity-25`}
                style={{ height: "0.9em" }}
            />
        </span>
    );
};

export default Highlighter;
