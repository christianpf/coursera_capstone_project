import React, {useState, useEffect} from "react";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { ConfirmedBooking } from "./ConfirmedBooking";


const FormikObserver = ({updateDate}) => {
  const { values } = useFormikContext();


  useEffect(() => {
    updateDate(values.resDate)
  }, [updateDate, values]);

  return null;
}

const ReservationForm = () => {
  const [date, setDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState(["First Select a date"]);
  const [validSubmit, setValidSubmit] = useState(false);

  const tomorrow = new Date() + 1;

  const updateDate = (date) => {
    setDate(date);
  }

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

  const submitAPI = function(formData) {
      return true;
  };

  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date(date)));
  }, [date])
  
  return (
    <>
    {validSubmit && <ConfirmedBooking/>}
    <Formik
      initialValues={{
        resDate: "",
        resTime: "",
        resGuests: "",
        resOccasion: "",
      }}
      validationSchema={Yup.object({
        resDate: Yup.date()
          .min(tomorrow, "Date must be tomorrow or later")
          .required("Required"),
        resTime: Yup.string().required("Required"),
        resGuests: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          if(submitAPI(values)){
            setValidSubmit(true);
            localStorage.setItem("Reserve", JSON.stringify(values));
          }
          setSubmitting(false);
        }, 400);
      }}
    >

      <Form className="booking__form full__bleed">
        <FormikObserver updateDate={updateDate}/>
        <label htmlFor="date">Date</label>
        <Field name="resDate" type="date" className="form__field"/>
        <p className="form__error">
          <ErrorMessage  name="resDate" />
        </p>

        <label htmlFor="resTime">Reservation Time</label>
        <Field
          name="resTime"
          as="select"
          placeholder="Select Hour"
          className="form__field"
        >
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </Field>
        <p className="form__error">
          <ErrorMessage  name="resTime" />
        </p>
        <label htmlFor="resGuests">Number of Guests</label>
        <Field
          name="resGuests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          className="form__field"
        />
        <p className="form__error">
          <ErrorMessage name="ResGuests" />
        </p>

        <label htmlFor="resOccasion">Occasion</label>
        <Field name="resOccasion" as="select" className="form__field">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Field>
        <p className="form__error">
          <ErrorMessage name="resOccasion" />
        </p>

        <button type="submit" className="btn__primary">Submit</button>
      </Form>
    </Formik>
    </>  
  );
};

export default ReservationForm;
