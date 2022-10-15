<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd
import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
<<<<<<< HEAD
    const partners = useSelector(selectAllPartners);
=======
    const partners = selectAllPartners();
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd

    return (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                );
            })}
        </Col>
    );
};

export default PartnersList;
