import React from 'react'
import Image, { StaticImageData } from 'next/image'
import JB from '../public/images/JB.jpg'


interface PlayerCardProps {
    rank: string;
    movement: string;
    lastRank: string;
    peakRank: string;
    consecutiveWeeks: string;
    playerName: string;
    playerImage?: StaticImageData;
    playerTeam: string;
    playerPosition: string;
    playerPoints: number;
    playerRebounds: number;
    playerAssists: number;
    playerSteals: number;
    playerBlocks: number;
    playerTurnovers: number;
    playerJerseyNumber: string;
}

const PlayerCard = ({ 
    rank,
    movement,
    lastRank = '-',
    peakRank = '-',
    consecutiveWeeks = '1',
    playerName,
    playerImage,
    playerTeam,
    playerPosition,
    playerJerseyNumber,
    playerPoints,
    playerRebounds,
    playerAssists,
    playerSteals, 
    playerBlocks, 
    playerTurnovers
}: PlayerCardProps) => {
  return (
    <div style={styles.card as React.CSSProperties}>
        <div style={styles.cardRankContainer as React.CSSProperties}>
            <p style={styles.cardRank}>{rank}</p>
        </div>
        <div style={styles.cardImageContainer as React.CSSProperties}>
            <Image src={ JB as StaticImageData || playerImage} alt="Player Image" width={100} height={100} style={styles.cardImage as React.CSSProperties} />
        </div>
        <div style={styles.cardMovementContainer as React.CSSProperties}>
            <p style={styles.rankingMovement}>{movement}</p>
        </div>
        <div style={styles.cardInfoContainer as React.CSSProperties}>
            <p style={styles.cardPlayerName}>{playerName}</p>
            <div style={styles.playerMetadataContainer as React.CSSProperties}>
                <p style={styles.playerMetadata}>{playerTeam} • {playerPosition} • #{playerJerseyNumber}</p>
            </div>
        </div>
        <div style={styles.rankStatsContainer as React.CSSProperties}>
            <div style={styles.rankStats as React.CSSProperties}>
                <p style={styles.rankLabel}>LW:</p>
                <p style={styles.rankValue as React.CSSProperties}>{lastRank}</p>
            </div>
            <div style={styles.rankStats as React.CSSProperties}>
                <p style={styles.rankLabel}>Peak:</p>
                <p style={styles.rankValue as React.CSSProperties}>{peakRank}</p>
            </div>
            <div style={styles.rankStats as React.CSSProperties}>
                <p style={styles.rankLabel}>Weeks:</p>
                <p style={styles.rankValue as React.CSSProperties}>{consecutiveWeeks}</p>
            </div>
        </div>
    </div>
  )
}

export default PlayerCard

const styles = {
    /** Card Styles */
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '3xl',
        padding: '2rem',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        alignItems: 'center',
        height: '150px',
        gap: '24px',
    },

    /** Player Rank Styles */
    cardRankContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
    },

    cardRank: {
        fontSize: '1.5rem',
        letterSpacing: '0.05em',
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'var(--font-anton)',
    },

    /** Player Rank Movement Styles */
    cardMovementContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
    },

    rankingMovement: {
        fontSize: '2rem',
        fontWeight: 'extrabold',
        color: 'black',
    },

    /** Player Image Styles */
    cardImageContainer: {
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
    },

    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
    },

    /** Player Info Styles */
    cardInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '3xl',
        padding: '16px 0',
        height: '100%',
        justifyContent: 'space-between',
    },

    cardPlayerName: {
        color: 'black',
        fontFamily: 'var(--font-poppins)',
        fontWeight: 'semibold',
        textTransform: 'uppercase',
    },
    
    playerMetadata: {
        color: 'black',
        fontFamily: 'var(--font-poppins)',
        fontSize: '0.8rem',
    },

    playerMetadataContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        maxWidth: '3xl',
        gap: '8px',
    },

    rankStatsContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '3xl',
        gap: '8px',
    },

    rankStats: {
        display: 'flex',
        width: '100%',
        maxWidth: '3xl',
        gap: '8px',
        justifyContent: 'space-between',
    },

    rankLabel: {
        fontFamily: 'var(--font-poppins)',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        color: '#8d8d8d',
    },

    rankValue: {
        color: 'black',
        fontFamily: 'var(--font-poppins)',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '20px',
    },
}