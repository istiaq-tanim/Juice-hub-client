import { configureStore } from "@reduxjs/toolkit";
import testiMonialReducer from "../features/Testimonilas/testimonialSlice"

export const store=configureStore({
      
      reducer:{
            testimonials:testiMonialReducer
      }
})