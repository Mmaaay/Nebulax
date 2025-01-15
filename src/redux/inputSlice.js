import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    projectDescription: "",
    email: "",
    isModalOpen: false,
  },
  reducers: {
    setProjectDescription(state, action) {
      state.projectDescription = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    toggleModal(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setProjectDescription, setEmail, toggleModal } =
  inputSlice.actions;
export default inputSlice.reducer;
