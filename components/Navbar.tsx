import React from 'react'

const Navbar = () => {
  return (
    <header style={styles.header as React.CSSProperties}>
        <h1 style={styles.headerText}>Hardwood Top 100</h1>
        <p style={styles.headerSubtext}>Week of February 8, 2026</p>
    </header>
  )
}

export default Navbar

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '3xl',
        padding: '16px',
        margin: '0 auto',
        backgroundColor: '#00FF9A',
    },
    headerText: {
        fontSize: '4rem',
        color: 'black',
        fontFamily: 'var(--font-anton)',
        textTransform: 'uppercase',
    },
    headerSubtext: {
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        color: 'black',
        fontFamily: 'var(--font-poppins)',
        textTransform: 'uppercase',
    },
}