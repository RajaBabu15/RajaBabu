import { makeAutoObservable } from "mobx";

class FormDataStore {
  step = 0;
  name = "";
  age = 0;
  gender = "";
  country = "";
  state = "";
  self_employed = "";
  family_history = "";
  work_interfere = "";
  no_employees = "";
  remote_work = "";
  tech_company = "";
  benefits = "";
  care_options = "";
  wellness_program = "";
  seek_help = "";
  anonymity = "";
  leave = "";
  mental_health_consequence = "";
  phys_health_consequence = "";
  coworkers = "";
  supervisor = "";
  mental_health_interview = "";
  phys_health_interview = "";
  mental_vs_physical = "";
  obs_consequence = "";

  constructor() {
    makeAutoObservable(this);
  }

  setField(field, value) {
    this[field] = value;
  }
}

const formDataStore = new FormDataStore();
export default formDataStore;
