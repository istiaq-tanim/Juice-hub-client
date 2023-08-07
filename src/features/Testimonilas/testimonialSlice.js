import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTestimonials } from "./testimonialApi"

const initialState = {
      isLoading: false,
      isError: false,
      error: '',
      testimonials: []
}

export const fetchTestimonials = createAsyncThunk("testimonial/fetchTestimonials", async () => {
      const response = await getTestimonials()
      return response
})

const testimonialSlice = createSlice({
      name: "testimonial",
      initialState,
      extraReducers: (builder) => {
            builder.addCase(fetchTestimonials.pending, (state) => {
                  state.isLoading = true
                  state.isError = false
            })
            builder.addCase(fetchTestimonials.fulfilled, (state, action) => {
                  state.isLoading = false
                  state.testimonials = action.payload
            })
            builder.addCase(fetchTestimonials.rejected, (state, action) => {
                  state.isLoading = false
                  state.testimonials = []
                  state.isError = true
                  state.error = action.error.message

            })
      }
})

export default testimonialSlice.reducer