import './StudentRow.css'

const COLORS = [
    { bg: '#e3f2fd', text: '#1565c0' },
    { bg: '#f3e5f5', text: '#6a1b9a' },
    { bg: '#e8f5e9', text: '#2e7d32' },
    { bg: '#fff3e0', text: '#e65100' },
    { bg: '#fce4ec', text: '#880e4f' },
    { bg: '#e0f2f1', text: '#004d40' },
]

function initials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

function StudentRow({ student, rank, isNew, onUpdateScore, onRemove }) {
    const pass = student.score >= 40
    const color = COLORS[student.id % COLORS.length]

    const handleScoreChange = (e) => {
        const val = parseInt(e.target.value)
        if (!isNaN(val)) onUpdateScore(student.id, val)
    }

    return (
        <tr className={`student-row ${isNew ? 'student-row--new' : ''}`}>
            <td>
                <span className="rank">#{rank}</span>
            </td>
            <td>
                <div className="name-cell">
                    <span
                        className="avatar"
                        style={{ background: color.bg, color: color.text }}
                    >
                        {initials(student.name)}
                    </span>
                    <span className="student-name">{student.name}</span>
                </div>
            </td>
            <td className="center-cell">
                <input
                    className="score-input"
                    type="number"
                    min="0"
                    max="100"
                    value={student.score}
                    onChange={handleScoreChange}
                />
            </td>
            <td className="center-cell">
                <span className={`badge ${pass ? 'badge--pass' : 'badge--fail'}`}>
                    <span className={`dot ${pass ? 'dot--pass' : 'dot--fail'}`} />
                    {pass ? 'Pass' : 'Fail'}
                </span>
            </td>
            <td className="center-cell">
                <button
                    className="btn-remove"
                    onClick={() => onRemove(student.id)}
                >
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default StudentRow