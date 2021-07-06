let formatDate = (strDate) => {
  let date = new Date(strDate);
  let day = date.getDate();
  let year = date.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthnumber = date.getMonth();
  let month = months[monthnumber];
  console.log(`${day} ${month} ${year}`);
};
formatDate("2020-05-14");
