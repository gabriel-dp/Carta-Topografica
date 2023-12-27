import { useEffect, useRef, useState } from "react";
import { MapContainer, Rectangle, Marker, TileLayer, useMapEvents, Popup } from "react-leaflet";
import L from "leaflet";

import { Point, Area } from "@/utils/maps";

import { MainMapContainer } from "./styles";

interface MapI {
	localPoint?: Point;
	localArea?: Area;
}

const MAP_BOUNDS = new L.LatLngBounds(
	new L.LatLng(-90, -180), // Southwest corner of the world
	new L.LatLng(90, 180) // Northeast corner of the world
);

export default function Map(props: MapI) {
	const mapRef = useRef<L.Map | null>(null);

	const [clickedPosition, setClickedPosition] = useState<L.LatLng | null>(null);
	function AddMarkerClick() {
		useMapEvents({
			dblclick(e) {
				setClickedPosition(e.latlng); // Get clicked coordinates
			},
		});

		return clickedPosition == null ? null : ( // Add a marker on click position with a popup
			<Marker position={clickedPosition}>
				<Popup closeOnClick={false}>
					Lat: {clickedPosition.lat.toFixed(6)}
					<br />
					Lng: {clickedPosition.lng.toFixed(6)}
					<br />
					<button className="remove-marker" onClick={() => setClickedPosition(null)}>
						Fechar
					</button>
				</Popup>
			</Marker>
		);
	}

	useEffect(() => {
		if (mapRef.current) {
			if (props.localPoint) {
				mapRef.current.setView(props.localPoint.createLeafletPoint(), 5);
			} else if (props.localArea) {
				mapRef.current.fitBounds(props.localArea?.createLeafletBounds());
			}
		}
	}, [props.localPoint, props.localArea]);

	return (
		<MainMapContainer>
			<MapContainer
				ref={mapRef}
				center={[0, 0]}
				zoom={2}
				maxBounds={MAP_BOUNDS}
				maxBoundsViscosity={1}
				minZoom={3}
				fadeAnimation
				doubleClickZoom={false}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" noWrap />
				<AddMarkerClick />
				{props.localPoint && <Marker position={props.localPoint.createLeafletPoint()} />}
				{props.localArea && <Rectangle bounds={props.localArea.createLeafletBounds()} />}
			</MapContainer>
		</MainMapContainer>
	);
}

