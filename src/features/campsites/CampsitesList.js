import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
<<<<<<< HEAD
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
=======
    const campsites = selectAllCampsites();
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd

    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;
