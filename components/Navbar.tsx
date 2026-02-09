import React from 'react'

const Navbar = () => {
  return (
    <header style={styles.header}>
        <h1 style={styles.headerText}>Hardwood Top 100</h1>
    </header>
  )
}

export default Navbar

const styles = {
    header: {
        display: 'flex',
        width: '100%',
        maxWidth: '3xl',
        padding: '16px',
        margin: '0 auto',
        backgroundColor: '#00FF9A',
    },
    headerText: {
        fontSize: '1.6rem',
        color: 'black',
        fontFamily: 'var(--font-anton)',
        textTransform: 'uppercase',
    }
}