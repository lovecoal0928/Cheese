import { LatLng } from "types/latlng";

interface Location {
    location: {
        lat: number;
        lng: number;
    };
}

export const findFarthestLocation = (center: { lat: number; lng: number }, locations: Location[]): Location | null => {
    if (locations.length === 0) {
        return null;
    }

    let farthestLocation: Location = locations[0];
    let maxDistance = getDistance(center, farthestLocation.location);

    for (let i = 1; i < locations.length; i++) {
        const location = locations[i];
        const distance = getDistance(center, location.location);
        if (distance > maxDistance) {
            maxDistance = distance;
            farthestLocation = location;
        }
    }

    return farthestLocation;
}

function getDistance(p1: LatLng, p2: LatLng): number {
    const R = 6371e3; // earth radius in meters
    const lat1 = toRadians(p1.lat);
    const lat2 = toRadians(p2.lat);
    const deltaLat = toRadians(p2.lat - p1.lat);
    const deltaLng = toRadians(p2.lng - p1.lng);

    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function toRadians(degrees: number): number {
    return degrees * Math.PI / 180;
}