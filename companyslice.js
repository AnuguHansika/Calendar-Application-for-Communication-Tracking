import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  methods: [
    { id: 1, name: "LinkedIn Post", description: "Post on LinkedIn", mandatory: true },
    { id: 2, name: "LinkedIn Message", description: "Send a LinkedIn message", mandatory: true },
    { id: 3, name: "Email", description: "Send an email", mandatory: true },
    { id: 4, name: "Phone Call", description: "Call the company", mandatory: true },
    { id: 5, name: "Other", description: "Other methods", mandatory: false },
  ],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany(state, action) {
      state.companies.push(action.payload);
    },
    updateCompany(state, action) {
      const index = state.companies.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    deleteCompany(state, action) {
      state.companies = state.companies.filter(c => c.id !== action.payload);
    },
  },
});

export const { addCompany, updateCompany, deleteCompany } = companySlice.actions;
export default companySlice.reducer;