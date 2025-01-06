/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import CalendarPicker from "./CalendarPicker";
import "react-calendar/dist/Calendar.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function ContactForm({ setShowForm, setSubmitMessage }) {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // const serviceID = "service_yenq5yp"; // my email
    const serviceID = "service_knmg8rm"; // trio email
    const templateID = "template_0ahzrr9";
    const userID = "dyz9UzngEOQUHFgv3";
    emailjs.send(serviceID, templateID, data, userID).then(
      (response) => {
        console.log("Email sent successfully!", response);
        // Show a success message to the user
        reset();
        setShowForm(false);
        setSubmitMessage("ההודעה נשלחה בהצלחה! ✅");
        setTimeout(() => setSubmitMessage(""), 5000);
      },
      (error) => {
        setSubmitMessage("משהו השתבש😞, אנא נסו שנית");
        console.log("Error sending email:", error);
        // Show an error message to the user
      }
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <label htmlFor="from_name">{t("form.name")}</label>
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
        <label htmlFor="from_email">{t("form.email")}</label>
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
        <label htmlFor="date">{t("form.date")}</label>
        <input
          type="text"
          id="date"
          name="date"
          value={date.toLocaleDateString("he-IL")}
          onClick={()=> setShowCalendar(true)}
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
          placeholder={t("form.message")}
          {...register("message")}
        ></textarea>
      </div>
      <button type="submit" className="submit-form">
      {t("form.submit")}
      </button>
    </form>
  );
}

export default ContactForm;
