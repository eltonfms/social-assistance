import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './styles.scss';

function OrphanagesMap() {
  return (
    <div className="map">
      <aside  className="map-aside">
        <header className="map-header">
          <h2>Assistência Social App</h2>
          <p>Escolha um orfanato no mapa.</p>
        </header>
        <footer  className="map-footer">
          <span>
            <strong>Belo Horizonte</strong><br />
            Minas Gerais
          </span>
        </footer>
      </aside>
      <section className="map-canvas">
        <Map 
          center={ [-19.9196016, -43.9484139] }
          zoom={ 14 }
          style={{ height: '100%', width: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        </Map>
      </section>
      <div className="map-new">
        <Link className="landing-actions-item" to="/app">
          +
          <span className="sr-only">novo</span>
        </Link>
      </div>
    </div>
  )
}

export default OrphanagesMap;