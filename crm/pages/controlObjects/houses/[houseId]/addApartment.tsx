import { NextPage } from "next";
import { useRouter } from "next/router";
import ApartmentForm from "../../../../components/Forms/PageForms/ControlObjects/ApartmentForm";
import MainLayout from "../../../../components/MainLayout";
import { ApartmentData } from "../../../../models/IHouse";
import { addApartment } from "../../../../store/actions/controlObjectActions";

const AddApartment: NextPage = () => {
  const houseId = useRouter().query.houseId.toString();
  const initApartment = {
    createDate: new Date(),
    numberOfApartment: "",
    numberOfEntrance: "",
    cadastralNumber: "",
    typeOfApartment: "",
    characteristic: "",
    totalArea: "",
    livingArea: "",
    account: "",
    accountArea: "",
    house: houseId,
  };
  const addApartmentSubmit = async (apartmentData: ApartmentData) => {
    await addApartment(houseId, apartmentData);
  };
  return (
    <MainLayout
      breadcrumbs="Объекты управления / Дома / Список домов / Добавить новое помещение"
      title="Список домов"
      mainTitle="Добавление нового помещения"
    >
      <ApartmentForm
        initApartment={initApartment}
        onSubmit={addApartmentSubmit}
      />
    </MainLayout>
  );
};

export default AddApartment;
