import type { NextPage } from "next";
import { useEffect } from "react";
import AppealForm from "../../components/Forms/PageForms/Appeals/AppealForm";
import MainLayout from "../../components/MainLayout";
import { createAppeal } from "../../store/actions/appealActions";
import {
  getHouses,
  getHousesByCompany,
} from "../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AddAppeal: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const houses = useAppSelector(getHouses());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(companyId));
  }, [dispatch]);

  const initAppeal = {
    number: "",
    type: "",
    text: "",
    files: [],
    address: "",
    numberOfApartment: "",
    senderFullName: "",
    account: null,
    senderIsOwner: true,
    phone: "",
    isPhoneBindToAccount: false,
    company: companyId,
  };
  const addAppealSubmit = async (appealData: FormData) => {
    await createAppeal(appealData);
  };

  return (
    <MainLayout
      breadcrumbs="Обращения / Новое обращение"
      title="Обращения"
      mainTitle="Новое обращение"
    >
      <AppealForm
        initAppeal={initAppeal}
        onSubmit={addAppealSubmit}
        houses={houses}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export default AddAppeal;
