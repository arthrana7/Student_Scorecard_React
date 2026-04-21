import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAdd }) {
    const [name, setName] = useState('')
    const [score, setScore] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!name.trim()) newErrors.name = true
        const parsedScore = parseInt(score)
        if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) newErrors.score = true

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setTimeout(() => setErrors({}), 1500)
            return
        }

        onAdd(name.trim(), parsedScore)
        setName('')
        setScore('')
        setErrors({})
    }

    return (
        <div className="card form-card">
            <div className="card-header">
                <span className="card-title">Add New Student</span>
            </div>
            <form className="form-grid" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="student-name">Full Name</label>
                    <input
                        id="student-name"
                        className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                        placeholder="e.g. Priya Sharma"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    {errors.name && <span className="error-msg">Please enter a name</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="student-score">Score (0–100)</label>
                    <input
                        id="student-score"
                        className={`form-input ${errors.score ? 'form-input--error' : ''}`}
                        type="number"
                        min="0"
                        max="100"
                        placeholder="e.g. 75"
                        value={score}
                        onChange={e => setScore(e.target.value)}
                    />
                    {errors.score && <span className="error-msg">Enter a score between 0–100</span>}
                </div>

                <div className="form-group form-submit">
                    <label style={{ visibility: 'hidden' }}>Submit</label>
                    <button type="submit" className="btn-primary">
                        + Add Student
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStudentForm