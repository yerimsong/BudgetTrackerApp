function Sum({rowsData, handleChange}) {
    let sum = 0.00;
    for (let i = 0; i < rowsData.length; i++) {
        const cost = parseFloat(rowsData[i].cost);
        if (!isNaN(cost)) {
            sum += parseFloat(cost);
        }
    }

    return (
        <h3>Total Spendings: ${(Math.round(sum * 100) / 100).toFixed(2)}</h3>
    )
}

export default Sum;