import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, search, onSearch, onUpdateScore, onRemove, newlyAddedId }) {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-title">Students</span>
                <input
                    className="search-input"
                    placeholder="Search name..."
                    value={search}
                    onChange={e => onSearch(e.target.value)}
                />
            </div>

            {students.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📋</div>
                    <p>No students found.</p>
                </div>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student</th>
                                <th>Score</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <StudentRow
                                    key={student.id}
                                    student={student}
                                    rank={index + 1}
                                    isNew={student.id === newlyAddedId}
                                    onUpdateScore={onUpdateScore}
                                    onRemove={onRemove}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default StudentTable