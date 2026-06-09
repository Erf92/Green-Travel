const app = {
  form: document.getElementById("searchForm"),
  destination: document.getElementById("destination"),
  travelDate: document.getElementById("travelDate"),
  travelers: document.getElementById("travelers"),
  infoBtn: document.querySelectorAll(".card__info-btn"),
};

function handleSearch(e) {
  e.preventDefault();

  if (!app.destination || !app.travelDate || !app.travelers) return;

  const destinationValue = app.destination.value.trim();
  const travelDateValue = app.travelDate.value.trim();
  const travelersValue = app.travelers.value.trim();

  if (!destinationValue || !travelDateValue || !travelersValue) {
    if (!destinationValue) {
      alert("لطفا بخش مربوط به نام مقصد را پر کنید");
    }
    if (!travelDateValue) {
      alert("لطفا بخش مربوط به تاریخ سفر را پر کنید");
    }
    if (!travelersValue) {
      alert("لطفا بخش مربوط به تعداد مسافران را پر کنید");
    }
    return;
  }

  alert(
    `جستجوی ${destinationValue} برای ${travelersValue} نفر در تاریخ ${travelDateValue}`
  );
}

if (app.form) {
  app.form.addEventListener("submit", handleSearch);
}

if (app.infoBtn) {
  app.infoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert(`جزئیات تور ${btn.dataset.title}`);
    });
  });
}
