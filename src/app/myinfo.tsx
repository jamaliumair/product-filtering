export default function Myinfo() {
    return (
        <table style={{ border: "1px solid black", borderCollapse: "collapse", marginBottom: "20px" }}>
            <thead>
            <tr style={{ padding: "1px solid black" }}>
                <th style={{ border: "1px solid black", padding: "10px"}}>Name</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Father Name</th>
                <th style={{ border: "1px solid black", padding: "10px" }}>Roll Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{ border: "1px solid black", padding: "10px" }}>Umair Jamali</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>Abdul Majeed Jamali</td>
                <td style={{ border: "1px solid black", padding: "10px" }}>185842</td>
            </tr>
            </tbody>
        </table>
        
    )
}