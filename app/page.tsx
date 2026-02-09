import Navbar from "@/components/Navbar";
import PlayerCardGroup from "@/components/PlayerCardGroup";

export default function Home() {
  return (
    <div style={styles.container as React.CSSProperties}>
      <Navbar />
      <PlayerCardGroup />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',  
    margin: '0 auto',
    backgroundColor: '#EDECEC',
    minHeight: '100vh'
  },
}
