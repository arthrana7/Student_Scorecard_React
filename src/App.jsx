import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Aarav Mehta', score: 82 },
  { id: 2, name: 'Priya Sharma', score: 36 },
  { id: 3, name: 'Rohan Verma', score: 55 },
  { id: 4, name: 'Sneha Patel', score: 91 },
  { id: 5, name: 'Kiran Joshi', score: 28 },
]

let nextId = 6

function App() {
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')
  const [newlyAddedId, setNewlyAddedId] = useState(null)

  const addStudent = (name, score) => {
    const id = nextId++
    setStudents(prev => [...prev, { id, name, score }])
    setNewlyAddedId(id)
    setTimeout(() => setNewlyAddedId(null), 400)
  }

  const updateScore = (id, score) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Math.min(100, Math.max(0, score)) } : s)
    )
  }

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const passing = students.filter(s => s.score >= 40).length
  const avg = students.length
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)
    : 0

  return (
    <div className="app">
      <Header
        total={students.length}
        passing={passing}
        failing={students.length - passing}
        avg={avg}
      />
      <main className="main">
        <AddStudentForm onAdd={addStudent} />
        <StudentTable
          students={filtered}
          search={search}
          onSearch={setSearch}
          onUpdateScore={updateScore}
          onRemove={removeStudent}
          newlyAddedId={newlyAddedId}
        />
      </main>
    </div>
  )
}

export default App