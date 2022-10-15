import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
};

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
};
<<<<<<< HEAD

export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
};
=======
>>>>>>> 5093073d9fee2a7193f885ed3db1f32a2902f4fd
