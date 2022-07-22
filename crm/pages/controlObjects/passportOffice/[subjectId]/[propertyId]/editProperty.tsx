import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../../../components/MainLayout";
import { wrapper } from "../../../../../store/store";
import Tabs from "../../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../../components/Tabs/tabLinks";
import { getFullName } from "../../../../../utils/functions";
import getPropertyById from "../../../../api/getPropertyById";
import PropertyForm from "../../../../../components/Forms/PageForms/ControlObjects/PropertyForm";
import { editProperty } from "../../../../../store/actions/subjectActions";
import { IProperty } from "../../../../../models/IProperty";
import {
  setPropertyData,
  setSubjectData,
} from "../../../../../store/slices/subjectSlice";

export interface PropertyProps {
  property: IProperty;
}

const EditProperty: NextPage<PropertyProps> = ({ property }) => {
  const initProperty = {
    subject: property.subject._id,
    startDateOfOwnership: property.startDateOfOwnership
      ? property.startDateOfOwnership
      : null,
    endDateOfOwnership: property.endDateOfOwnership
      ? property.endDateOfOwnership
      : null,
    registerNumber: property.registerNumber ? property.registerNumber : "",
    accountNumber: property.account.number ? property.account.number : "",
    shareOfOwnership: property.shareOfOwnership
      ? property.shareOfOwnership
      : "",
    comment: property.comment ? property.comment : "",
    docs: property.docs ? property.docs : [],
  };

  const editPropertySubmit = async (propertyData: FormData) => {
    await editProperty(property.subject._id, property._id, propertyData);
  };

  return (
    <MainLayout
      title="Паспортный стол"
      mainTitle={getFullName(property.subject)}
    >
      <Tabs tabLinks={settingsSubjectLinks(property.subject._id)} />
      <PropertyForm
        initProperty={initProperty}
        onSubmit={editPropertySubmit}
        href={`/controlObjects/passportOffice/${property.subject._id}/properties`}
      />
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const property = await getPropertyById(ctx);
      store.dispatch(setSubjectData(property.subject));
      store.dispatch(setPropertyData(property));
      return {
        props: property ? { property } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditProperty;
