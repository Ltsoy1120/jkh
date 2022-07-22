import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import ApartmentForm from "../../../../../../components/Forms/PageForms/ControlObjects/ApartmentForm";
import MainLayout from "../../../../../../components/MainLayout";
import { ApartmentData, IApartment } from "../../../../../../models/IHouse";
import { editApartment } from "../../../../../../store/actions/controlObjectActions";
import { wrapper } from "../../../../../../store/store";
import getApartmentById from "../../../../../api/getApartmentById";

export interface EditApartmentProps {
  apartment: IApartment;
}

const EditApartment: NextPage<EditApartmentProps> = ({ apartment }) => {
  const houseId = useRouter().query.houseId.toString();
  const initApartment = {
    createDate: apartment.createDate,
    numberOfApartment: apartment.numberOfApartment,
    numberOfEntrance: apartment.numberOfEntrance,
    cadastralNumber: apartment.cadastralNumber,
    typeOfApartment: apartment.typeOfApartment,
    characteristic: apartment.characteristic,
    totalArea: apartment.totalArea,
    livingArea: apartment.livingArea,
    account: apartment.account,
    accountArea: apartment.accountArea,
    house: apartment.house,
  };
  const EditApartmentSubmit = async (apartmentData: ApartmentData) => {
    await editApartment(houseId, apartment._id, apartmentData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Редактирование дома / помещения"
      title="Редактирование помещения"
      mainTitle="Редактирование помещения"
    >
      <ApartmentForm
        initApartment={initApartment}
        onSubmit={EditApartmentSubmit}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const apartment = await getApartmentById(ctx);
      return {
        props: apartment ? { apartment } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditApartment;
