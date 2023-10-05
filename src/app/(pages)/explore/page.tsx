import MapComponent from '../../components/MapComponent';
import react from 'react';

const page = () => {
    return (
<div className="flex flex-1 items-center justify-center p-6">
    <div className="w-full max-w-lg">
        <MapComponent></MapComponent>
    </div>
</div>
    );
}

export default page;