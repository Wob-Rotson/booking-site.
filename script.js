document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date-input");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(() => {
        document.getElementById("confirmation").textContent = "Booking received!";
        form.reset();
      })
      .catch(err => {
        console.error("Submission error:", err);
      });
    });
  }
});
