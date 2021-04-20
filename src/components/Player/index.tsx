import styles from "./styles.module.scss";

export const Player = () => {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="playingNow" />
        <strong>Tocando Agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="shuffle" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="playPrevious" />
          </button>
          <button className={styles.playButton} type="button">
            <img src="/play.svg" alt="play" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="playNext" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="repeat" />
          </button>
        </div>
      </footer>
    </div>
  );
};
