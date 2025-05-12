import Gallery from './Gallery';
import './App.css'; 

function App() {
  const images = [
    {
      thumbnail: '/images/image1-thumb.jpg',
      full: '/images/image1-full.jpg',
      alt: 'Описание изображения 1',
    },
    {
      thumbnail: '/images/image2-thumb.jpg',
      full: '/images/image2-full.jpg',
      alt: 'Описание изображения 2',
    },
  ];

  return (
    <div className="App">
      <h1>Интерактивная галерея</h1>

      {/* Контейнер для двух галерей в ряд */}
      <div className="gallery-row">
        <div className="gallery-half">
          <Gallery images={images} />
        </div>
        <div className="gallery-half">
          <Gallery images={images} />
        </div>
      </div>

      {/* Контейнер для галереи на полную ширину */}
      <div className="gallery-full">
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default App;
