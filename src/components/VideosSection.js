import styles from './VideosSection.module.css';

// Placeholder data for videos
const mainVideo = {
  id: 'L3wKzyIN1yk', // Example YouTube Video ID
  title: 'A4 2021 B9 / B9.5 - KYDZ MLB Tool ile Yedek Anahtar Programlama',
  description: 'KYDZ MLB Tool ile Yedek Anahtar Programlama',
};

const videoPlaylist = [
  { id: 'L3wKzyIN1yk', title: 'A4 2021 B9 / B9.5 - KYDZ MLB Tool ile Yedek Anahtar Programlama', source: 'Rem Anahtar' },
  { id: 'anotherVideoID1', title: 'Clio 5 2021 - Kayıp Anahtar Uygulaması - Abrites Farkıyla - Dünyada ilk!', source: 'Rem Anahtar' },
  { id: 'anotherVideoID2', title: 'Mercedes Actros 2018 TIR - Kayıp Anahtar Uygulaması - Abrites Farkıyla - F17 Tipli', source: 'Rem Anahtar' },
  { id: 'anotherVideoID3', title: 'Mini Cooper F55/F56 Anahtar Yapımı', source: 'Rem Anahtar' },
  // Add more videos as seen in the screenshot
];

const VideosSection = () => {
  // For now, we'll just display the structure.
  // A real implementation might use a state to change the mainVideo.id
  // or use a YouTube player library.

  return (
    <section className={styles.videosSection}>
      <div className={styles.titleContainer}>
        <span className={styles.titleHighlight}></span>
        <h2 className={styles.title}>Videolar</h2>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.mainVideoPlayer}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${mainVideo.id}`}
            title={mainVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.youtubeIframe}
          ></iframe>
          <div className={styles.mainVideoInfo}>
            <h3>{mainVideo.title}</h3>
            {/* <p>{mainVideo.description}</p> */}
          </div>
        </div>
        <aside className={styles.playlist}>
          <div className={styles.playlistHeader}>
            <span>Şimdi oynat</span>
            <span>1/{videoPlaylist.length}</span> {/* Simple counter */}
          </div>
          <ul>
            {videoPlaylist.map((video, index) => (
              <li key={video.id} className={video.id === mainVideo.id ? styles.activeVideo : ''}>
                {/* In a real app, clicking this would change the main video */}
                <div className={styles.playlistThumbnailPlaceholder}>
                  {/* Placeholder for thumbnail - could be an Image component */}
                  <span>{index + 1}</span>
                </div>
                <div className={styles.playlistVideoInfo}>
                  <h4>{video.title}</h4>
                  <p>{video.source}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default VideosSection;
