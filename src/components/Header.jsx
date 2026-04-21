import './Header.css'

function Header({ total, passing, failing, avg }) {
    return (
        <header className="header">
            <div className="header-blob header-blob--1" />
            <div className="header-blob header-blob--2" />
            <div className="header-inner">
                <h1 className="header-title">
                    Student <span className="header-title--accent">Scoreboard</span>
                </h1>
                <p className="header-subtitle">Track, update, and manage student performance</p>
                <div className="stats-bar">
                    <div className="stat-pill">
                        <strong>{total}</strong> students
                    </div>
                    <div className="stat-pill">
                        <span className="dot dot--pass" />
                        <strong>{passing}</strong> passing
                    </div>
                    <div className="stat-pill">
                        <span className="dot dot--fail" />
                        <strong>{failing}</strong> failing
                    </div>
                    <div className="stat-pill">
                        avg <strong>{avg}</strong>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header