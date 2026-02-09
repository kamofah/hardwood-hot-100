import React from 'react'
import PlayerCard from './PlayerCard'


/** Test function to get a random rank player rank movement */
const getPlayerMovement = () => {
    const randomNumber = Math.random()
    if (randomNumber < 0.5) {
        return '↑'
    } else if (randomNumber < 0.8) {
        return '↓'
    } else {
        return '→'
    }
}

const PlayerCardGroup = () => {
  return (
    <div style={styles.playerCardContainer as React.CSSProperties}>
    {Array.from({ length: 100 }).map((_, index) => (
      <PlayerCard
        key={index}
        rank={(index + 1).toString()}
        movement={getPlayerMovement()}
        lastRank={'-'}
        peakRank={'-'}
        consecutiveWeeks={'1'}
        playerName="LeBron James"
        playerJerseyNumber="11"
        playerTeam="New York Knicks"
        playerPosition="Point Guard"
        playerPoints={20.5}
        playerRebounds={5.2}
        playerAssists={7.8}
        playerSteals={1.2}
        playerBlocks={0.8}
        playerTurnovers={2.5}
      />
    ))}
  </div>
  )
}

export default PlayerCardGroup

const styles = {
  playerCardContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '3rem 15rem',
    gap: '16px',
  }
}