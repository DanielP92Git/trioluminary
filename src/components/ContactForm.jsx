/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import CalendarPicker from "./CalendarPicker";
import "react-calendar/dist/Calendar.css";
import emailjs from "emailjs-com";

function ContactForm({ setShowForm, setSubmitMessage }) {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const serviceID = "service_knmg8rm";
    const templateID = "template_0ahzrr9";
    const userID = "dyz9UzngEOQUHFgv3";
    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        console.log("Email sent successfully!", response);
        // Show a success message to the user
        reset();
        setShowForm(false);
        setSubmitMessage("ההודעה נשלחה בהצלחה!✨");
      },
      (error) => {
        setSubmitMessage("משהו השתבש😞, אנא נסו שנית");
        console.log("Error sending email:", error);
        // Show an error message to the user
      }
    );
  }

  function toggleCalendar() {
    setShowCalendar(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <label htmlFor="from_name">שם:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          {...register("from_name", { required: "נא מלאו את שמכם המלא" })}
        />
        {errors.from_name && (
          <p className="form-error">{errors.from_name.message}</p>
        )}
      </div>

      <div className="input-container">
        <label htmlFor="from_email">דוא&rdquo;ל:</label>
        <input
          type="text"
          id="from_email"
          name="from_email"
          {...register(
            "from_email",
            { required: `נא מלאו את כתובת הדוא"ל` },
            {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "נא למלא כתובת דואל תקינה",
              },
            }
          )}
        />
        {errors.from_email && (
          <p className="form-error">{errors.from_email.message}</p>
        )}
      </div>
      <div className="input-container">
        <label htmlFor="date">תאריך האירוע:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={date.toLocaleDateString("he-IL")}
          onClick={toggleCalendar}
          readOnly
          {...register("date")}
        />
        {showCalendar && (
          <CalendarPicker
            date={date}
            setDate={setDate}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
      <div className="input-container">
        <textarea
          name="message"
          id="message"
          placeholder="תיאור הפנייה"
          {...register("message")}
        ></textarea>
      </div>
      <button type="submit" className="submit-form">
        שלח
      </button>
    </form>
  );
}

export default ContactForm;
