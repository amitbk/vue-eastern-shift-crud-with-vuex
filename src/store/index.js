import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import { v4 as uuidv4 } from 'uuid';

export default new Vuex.Store({
  state: {
    shift: {title: "", desc: "", dates: [] },
    shifts: [
      {id: uuidv4(), title: "Hello Store", desc: "desc", 
        // dates are hardcoded: because of time issue
        dates: [
          {date: "12-dec,2022", start_time: "10:00", end_time: "20:00", type: "Consultation", price: 70},
          {date: "13-dec,2022", start_time: "11:00", end_time: "21:00", type: "Telephone", price: 80},
          {date: "14-dec,2022", start_time: "12:00", end_time: "22:00", type: "Ambulance", price: 90},
        ]
      }
    ],
  },
  mutations: {
    SHIFT_ADD (state, shift) {
      state.shifts.push( {...shift} )
    },
    SHIFT_EDIT (state, shift) {
      state.shift = {...shift};
    },
    SHIFT_UPDATE (state, shift) {
      const index = state.shifts.findIndex(
        element => element.id === shift.id
      );
      state.shifts.splice(index, 1, shift);
    },
    SHIFT_DELETE (state, shift) {
      console.log("36",shift)
      const index = state.shifts.findIndex(
        element => element.id === shift.id
      );
      state.shifts.splice(index, 1);
    },
    SHIFT_CLEAR (state) {
      state.shift = {title: "", desc: "", dates: [] };
    },
  },
  actions: {
    shiftAdd(context) {
      // decide to update or add
      if(!!context.state.shift.id) {
        context.commit('SHIFT_UPDATE', context.state.shift)
      }
      else {
        context.state.shift.id = uuidv4();
        context.state.shift.dates = [...context.state.shifts[0].dates ];
        context.commit('SHIFT_ADD', context.state.shift)
      }

      // clear shift
      context.commit('SHIFT_CLEAR')
    },
    shiftEdit(context, shift) {
      context.commit('SHIFT_EDIT', shift)
    },
    shiftDelete(context, shift) {
      context.commit('SHIFT_DELETE', shift)
      context.commit('SHIFT_CLEAR')
    },
    
  },
  modules: {
  }
})
