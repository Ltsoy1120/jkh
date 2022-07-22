import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IProperty } from "../../models/IProperty";
import { ISubject } from "../../models/ISubject";

export interface SubjectState {
  subjects: ISubject[];
  subject: ISubject;
  property: IProperty;
  isLoading: boolean;
  error: string | null;
}

const initialState: SubjectState = {
  subjects: [],
  subject: null,
  property: null,
  isLoading: false,
  error: null,
};

export const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    subjectsFetching: (state) => {
      state.isLoading = true;
    },
    subjectsFetchingSuccess: (state, action: PayloadAction<ISubject[]>) => {
      state.isLoading = false;
      state.error = null;
      state.subjects = action.payload;
    },
    subjectsFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSubjectData: (state, action: PayloadAction<ISubject>) => {
      state.subject = action.payload;
    },
    setPropertyData: (state, action: PayloadAction<IProperty>) => {
      state.property = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subjects,
      };
    },
  },
});

export const {
  subjectsFetching,
  subjectsFetchingSuccess,
  subjectsFetchingError,
  setSubjectData,
  setPropertyData,
} = subjectSlice.actions;

export const subjectReducer = subjectSlice.reducer;
