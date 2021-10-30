export default function History({gratitudes}) {
    return(
        <p className = "text-primary text-2xl font-Abril">
            Previously, you were grateful for
            <span className = "font-bold">
                {gratitudes.map(g => ' '+g.entry).toString()}
            </span>
        </p>
    )
}